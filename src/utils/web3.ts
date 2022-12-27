import { ethers } from "ethers";
import axiosInstance from "./axios";

export const getSignerAddressEthereum = (account: string) => {
  try {
    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner(account)
    return signer._address;
  } catch (error) {
    console.log("getSignerEthereum " + error);
    return "";
  }
}

export const getSignaturePublicMint = async(account: string) => {
  try {
    const res = await axiosInstance.post<{signature: string}>("/public-mint/signature", {account})
    return res.data.signature;
  } catch (error) {
    console.log("getSignaturePublicMint " + error)
  }
}