import Modal from "@/src/components/base/Modal";
import useWeb3Connect from "@/src/hooks/useWeb3Connect";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState, useAppDispatch } from "@/src/redux/store";
import { useSelector } from "react-redux";

const Web3NotSupport = () => {
  const dispatch = useAppDispatch();
  const { connectMetamask } = useWeb3Connect();
  const { isShow, type } = useSelector((state: RootState) => {
    return state.web3Modal;
  });

  if (!!isShow && type === "NOT_SUPPORT") {
    return (
      <Modal
        title={"To play the game, open this website on desktop."}
        isOpen={!!isShow && type === "NOT_SUPPORT"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={false}
        closeOnOverlayClick={false}
      />
    );
  } else {
    return null;
  }
};

export default Web3NotSupport;
