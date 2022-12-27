export interface ITransactionSuccessModalProps {}

import Modal from "@/src/components/base/Modal";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import cancelImg from "@/public/assets/images/buttons/cancel.png";
import Image from "next/image";

export default function TransactionErrorModal() {
  const dispatch = useDispatch();
  const { isShow, type, title, content } = useSelector((state: RootState) => {
    return state.web3Modal;
  });
  if (!!isShow && type === "TRANSACTION_ERROR") {
    return (
      <Modal
        title={title}
        isOpen={!!isShow && type === "TRANSACTION_ERROR"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
        closeOnOverlayClick={true}
        headerTop={
          <Box>
            <Image src={cancelImg.src} priority={true} width="100%" height={"100%"} />
          </Box>
        }
      >
        <Box textAlign={"center"}>{content}</Box>
      </Modal>
    );
  } else {
    return null;
  }
}
