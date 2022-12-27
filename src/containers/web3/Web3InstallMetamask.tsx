import Modal from "@/src/components/base/Modal";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import cancelImg from "@/public/assets/images/buttons/cancel.png";

const Web3InstallMetamask = () => {
  const dispatch = useDispatch();
  const { isShow, type } = useSelector((state: RootState) => {
    return state.web3Modal;
  });
  if (!!isShow && type === "INSTALL_METAMASK") {
    return (
      <Modal
        title={"MetaMask wallet not found"}
        isOpen={!!isShow && type === "INSTALL_METAMASK"}
        // isOpen={!!isShow && type === "INSTALL_METAMASK"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
        //   closeOnOverlayClick={false}
        headerTop={<Image src={cancelImg.src} width={96} height={96} />}
      >
        <Box textAlign={"center"}>
          Aliquam porttitor aliquet pulvinar cursus enim duis. Pharetra mattis lobortis maecenas
        </Box>
        <Image src={cancelImg.src} />
      </Modal>
    );
  } else {
    return null;
  }
};

export default Web3InstallMetamask;
