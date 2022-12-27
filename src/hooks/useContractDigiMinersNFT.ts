import { RootState } from "@/src/redux/store";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DigiMinersNftContract from "../contracts/digiminers-nft.json";
import { initNftContract, resetNftContract } from "../redux/slices/nftContractSlice";

export interface IuseContractDigiMinersNFTProps {}

export type PHASE_MINT_TYPE = "ALLOW_LIST" | "PUBLIC";

export default function useContractDigiMinersNFT() {
  const { isActive, account } = useWeb3React();
  const [callable, setCallable] = useState(false);
  const dispatch = useDispatch();
  const { contract, account: accountStore } = useSelector((state: RootState) => state.nftContract);
  useEffect(() => {
    //Update new instance if account change
    if (isActive && account && account != accountStore) {
      setCallable(true);
      const ethereum = (window as any).ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner(account);
      const instance = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_DIGI_MINERS_NFT_MINT_ADDRESS?.toString() || "",
        DigiMinersNftContract.abi,
        signer
      );
      dispatch(initNftContract({ contract: instance, account: account }));
    } else {
      dispatch(resetNftContract);
      setCallable(false);
    }
  }, [isActive, account]);

  const allowListMint = async(quantity: number, proof: string[]) => {
    if(contract){
      const res = await contract?.allowListMint(quantity, proof)
      console.log(res);
      const receipt = await res.wait();
      return receipt;
    }
  };

  const publicMint = async(signature: string) => {
    const res = await contract?.publicMint(signature);
    console.log(res);
    const receipt = await res.wait();
    console.log(receipt);
    return receipt;
  }

  const getPhasesMintActive = async (): Promise<PHASE_MINT_TYPE[]> => {
    try {
      const res: PHASE_MINT_TYPE[] = [];
      const isAllowListPhase = await contract?.whenAllowlistSaleIsOn();
      if (isAllowListPhase) res.push("ALLOW_LIST");

      const isPublicPhase = await contract?.whenPublicaleIsOn();
      if (isPublicPhase) res.push("PUBLIC");
      return res;
    } catch (error) {
      console.log("getPhaseMint " + error);
      return [];
    }
  };

  const getAllowListLimitPerWallet = async () => {
    try {
      const limit = await contract?.allowListLimitPerwallet();
      return +limit;
    } catch (error) {
      console.log("getAllowListLimitPerWallet " + error);
      return null;
    }
  };

  const getTotalAllowListMinted = async (address: string) => {
    try {
      const total = await contract?.checkAllowListMinted(address);
      return +total;
    } catch (error) {
      console.log("getTotalAllowListMinted " + error);
      return 0;
    }
  };

  const checkPublicMinted = async (address: string) => {
    try {
      const isMinted = await contract?.checkPublicMinted(address);
      return !!isMinted;
    } catch (error) {
      console.log("getTotalAllowListMinted " + error);
      return false;
    }
  };

  return {
    allowListMint,
    publicMint,
    callable,
    getPhasesMintActive,
    getAllowListLimitPerWallet,
    getTotalAllowListMinted,
    checkPublicMinted,
  };
}
