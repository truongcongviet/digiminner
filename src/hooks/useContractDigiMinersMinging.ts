import { RootState } from "@/src/redux/store";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DigiMinersMiningContract from "../contracts/digiminers-mining.json";
import { initMiningContract, resetMiningContract } from "../redux/slices/miningContractSlice";

export interface IuseContractDigiMinersNFTProps {}

export default function useContractDigiMinersMinging() {
  const { isActive, account } = useWeb3React();
  const [callable, setCallable] = useState(false);
  const dispatch = useDispatch();
  const { contract, account: accountStore } = useSelector(
    (state: RootState) => state.miningContract
  );
  useEffect(() => {
    //Update new instance if account change
    if (isActive && account && account != accountStore) {
      setCallable(true);
      const ethereum = (window as any).ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner(account);
      const instance = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_DIGI_MINERS_MINING_ADDRESS?.toString() || "",
        DigiMinersMiningContract.abi,
        signer
      );
      dispatch(initMiningContract({ contract: instance, account: account }));
    } else {
      dispatch(resetMiningContract);
      setCallable(false);
    }
  }, [isActive, account]);

  const buyTickets = async (
    signature: string,
    quantity: number,
    tokenIdHolding: number,
    miningLevel: number
  ) => {
    try {
      if (contract) {
        const res = await contract?.buyTickets(signature, quantity, tokenIdHolding, miningLevel, {
          value: ethers.utils.parseEther((quantity * 0.01).toString()),
        });
        console.log(res);
        const receipt = await res.wait();
        console.log(receipt);
        return receipt;
      }
    } catch (error) {
      console.log("buyTickets " + error);
    }
  };

  const getTicketHolding = async () => {
    try {
      if (contract) {
        const roundId = await currentRound();
        return await contract?.getTicketHolding(account, roundId);
      }
    } catch (error) {
      console.log("getTicketHolding " + error);
    }
  };

  const currentRound = async () => {
    try {
      if (contract) {
        return await contract?.currentRound();
      }
    } catch (error) {
      console.log("currentRound " + error);
    }
  };

  const getPrice = async (ore: string) => {
    try {
      if (contract) {
        return await contract?.getPrice(ore);
      }
    } catch (error) {
      console.log("getPrice " + error);
    }
  };

  const getJackpotPrice = async (roundId: string) => {
    try {
      if (contract) {
        return await contract?.getJackpotPrice(roundId);
      }
    } catch (error) {
      console.log("getJackpotPrice " + error);
    }
  };

  const getJackpotWinner = async (roundId: string) => {
    try {
      if (contract) {
        return await contract?.getJackpotWinner(roundId);
      }
    } catch (error) {
      console.log("getJackpotWinner " + error);
    }
  };

  const getTicketDetails = async (ticketId: string) => {
    try {
      if (contract) {
        const roundId = await currentRound();
        return await contract?.getTicketDetails(roundId, ticketId);
      }
    } catch (error) {
      console.log("getTicketDetails " + error);
    }
  };

  const getSignData = async (
    quantity: number,
    tokenIdHolding: string,
    miningLevel: string,
    wallet: string,
    roundId: number
  ) => {
    try {
      if (contract) {
        return await contract?.getSignData(quantity, tokenIdHolding, miningLevel, wallet, roundId);
      }
    } catch (error) {
      console.log("getSignData " + error);
    }
  };

  return {
    getPrice,
    getJackpotPrice,
    getJackpotWinner,
    getSignData,
    getTicketHolding,
    getTicketDetails,
    buyTickets,
  };
}
