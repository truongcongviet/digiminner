export interface ITransactionSuccessModalProps {}

import Modal from "@/src/components/base/Modal";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import SuccessIcon from "/public/assets/images/icons/successful.png";
import Image from "next/image";

export default function TransactionSuccessModal() {
  const dispatch = useDispatch();
  const { isShow, type, title, content, footer } = useSelector((state: RootState) => {
    return state.web3Modal;
  });
  if (!!isShow && type === "TRANSACTION_SUCCESS") {
    return (
      <Modal
        title={title}
        isOpen={!!isShow && type === "TRANSACTION_SUCCESS"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
        closeOnOverlayClick={true}
        footer={footer}
        headerTop={
          <Box>
            <Image src={SuccessIcon.src} width={"97px"} height={"96px"} />
          </Box>
        }
      >
        {content && <Box textAlign={"center"}>{content}</Box>}
      </Modal>
    );
  } else {
    return null;
  }
}
