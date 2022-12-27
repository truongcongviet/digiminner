import { solididyKeccak256Encode } from "@/src/utils/utils";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":{
      const {account} = req.body;
      const provider = new ethers.providers.InfuraProvider(
        {
          name: process.env.INFURA_NET_ETH_NAME || "", 
          chainId: Number.parseInt(process.env.INFURA_NET_ETH_CHAIN_ID || "") 
        },
        process.env.INFURA_API_KEY
      ); 
      const privateKey = process.env.SIGNER_PRIVATE_KEY || "";

      const signer = new ethers.Wallet(privateKey, provider);
      const signature = await signer.signMessage(solididyKeccak256Encode(account))

      return res.status(200).json({signature})
    }
  }

  return res.status(404).json({
    message: "Not found"
  })
}