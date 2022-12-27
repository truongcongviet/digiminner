import { solididyKeccak256Encode } from "@/src/utils/utils";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import DigiMinersNftContract from "@/src/contracts/digiminers-nft.json";
import DigiMinersMiningContract from "@/src/contracts/digiminers-mining.json";
import axiosInstance from "@/src/utils/axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const provider = new ethers.providers.InfuraProvider(
    {
      name: process.env.INFURA_NET_ETH_NAME || "",
      chainId: Number.parseInt(process.env.INFURA_NET_ETH_CHAIN_ID || ""),
    },
    process.env.INFURA_API_KEY
  );
  const privateKey = process.env.SIGNER_PRIVATE_KEY || "";

  const signer = new ethers.Wallet(privateKey, provider);
  const instance = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_DIGI_MINERS_NFT_MINT_ADDRESS?.toString() || "",
    DigiMinersNftContract.abi,
    signer
  );

  const instanceMining = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_DIGI_MINERS_MINING_ADDRESS?.toString() || "",
    DigiMinersMiningContract.abi,
    signer
  );

  switch (req.method) {
    case "POST": {
      const { account, tokenIdHolding, quantity } = req.body;

      if (!account || !tokenIdHolding || !quantity) {
        return res.status(404).json({
          message: "Params is required",
        });
      }

      // Lever
      const miningLevel = 1;
      const roundId = await instanceMining.currentRound();

      const messageSign = await instanceMining.getSignData(
        quantity,
        tokenIdHolding,
        miningLevel,
        account,
        ethers.BigNumber.from(roundId)
      );
      const signature = await signer.signMessage(ethers.utils.arrayify(messageSign));

      return res
        .status(200)
        .json({
          signature,
          quantity,
          tokenIdHolding,
          miningLevel,
          account,
          roundId: ethers.BigNumber.from(roundId),
        });
    }
    case "GET": {
      const { account } = req.query;
      const urlNFTContract = `https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${process.env.NEXT_PUBLIC_CONTRACT_DIGI_MINERS_NFT_MINT_ADDRESS}&address=${account}&page=1&offset=1000&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`;
      const listNFT = await axiosInstance.get(urlNFTContract);
      if (listNFT.data?.status === "1" && listNFT.data?.result != null) {
        const ownerNFT: any = [];
        const ownerNFTCall: any = [];
        for (let index = 0; index < listNFT.data?.result.length; index++) {
          const items = listNFT.data?.result[index];
          if (!ownerNFTCall.includes(items.tokenID)) {
            const resCheckOwner = await instance.ownerOf(items.tokenID);
            resCheckOwner === account ? ownerNFT.push(items.tokenID) : null;
            ownerNFTCall.push(items.tokenID);
          }
        }
        return res.status(200).json({ listNFT: ownerNFT });
      } else {
        return res.status(200).json({
          listNFT: [],
          message: listNFT.data?.message,
          data: listNFT.data,
          urlNFTContract: urlNFTContract,
        });
      }
    }
  }

  return res.status(404).json({
    message: "Not found",
  });
}
