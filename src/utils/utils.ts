// import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
// import { GnosisSafe } from "@web3-react/gnosis-safe";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { ethers } from "ethers";
import keccak256 from "keccak256";
// import type { Connector } from "@web3-react/types";

export function getName(connector: any) {
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof WalletConnect) return "WalletConnect";
  //   if (connector instanceof CoinbaseWallet) return "Coinbase Wallet";
  if (connector instanceof Network) return "Network";
  //   if (connector instanceof GnosisSafe) return "Gnosis Safe";
  return "Unknown";
}

export const buf2hex = (x: any) => "0x" + x.toString("hex");

/**
 * Equal keccak256(abi.encodePacked(_param)); in solidity
 * @param account 
 * @returns 
 */
export const solididyKeccak256Encode = (account: string) => {
  return ethers.utils.arrayify(buf2hex(keccak256(account)))
} 
