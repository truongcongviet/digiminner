import Modal from "@/src/components/base/Modal";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

export default function CommonModal() {
  const dispatch = useDispatch();
  const { isShow, type, title, content, footer } = useSelector((state: RootState) => {
    return state.web3Modal;
  });
  if (!!isShow && type === "COMMON") {
    return (
      <Modal
        title={title}
        isOpen={!!isShow && type === "COMMON"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
        closeOnOverlayClick={true}
        footer={footer}
      >
        {content && <Box textAlign={"center"}>{content}</Box>}
      </Modal>
    );
  } else {
    return null;
  }
}
