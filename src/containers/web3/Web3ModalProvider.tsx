import Web3Connect from "./Web3Connect";
import Web3InstallMetamask from "./Web3InstallMetamask";
import Web3NotSupport from "./Web3NotSupport";
import Web3WrongNetWork from "./Web3WrongNetWork";
import useImagePreloader from "@/src/hooks/useImagePreloader";
import cancelImg from "@/public/assets/images/buttons/cancel.png";
import SubtractImg from "@/public/assets/bg/Subtract.png";
import SubtractMobileImg from "@/public/assets/bg/Subtract_mobile.png";
import Web3MintMiner from "./Web3MintMiner";
import TransactionSuccessModal from "./TransactionSuccessModal";
import TransactionErrorModal from "./TransactionErrorModal";
import TransactionLoadingModal from "./TransactionLoadingModal";
import MinerMove1 from "@/public/assets/miner/miner-move-1.png";
import MinerMove2 from "@/public/assets/miner/miner-move-2.png";
import SuccessIcon from "/public/assets/images/icons/successful.png";
import bgBtnType1 from "/public/assets/images/buttons/bg-btn-01.png";
import bgBtnType2 from "/public/assets/images/buttons/bg-btn-02.png";
import CommonModal from "./CommonModal";

const preloadSrcList: string[] = [
  cancelImg.src,
  SubtractImg.src,
  SubtractMobileImg.src,
  MinerMove1.src,
  MinerMove2.src,
  SuccessIcon.src,
  bgBtnType1.src,
  bgBtnType2.src,
];

const Web3ModalProvider = () => {
  useImagePreloader(preloadSrcList);

  return (
    <>
      <Web3Connect />
      <Web3NotSupport />
      <Web3InstallMetamask />
      <Web3WrongNetWork />
      <Web3MintMiner />
      <TransactionSuccessModal />
      <TransactionErrorModal />
      <TransactionLoadingModal />
      <CommonModal />
    </>
  );
};

export default Web3ModalProvider;
