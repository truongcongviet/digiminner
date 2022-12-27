import Modal from "@/src/components/base/Modal";
import useWeb3Connect from "@/src/hooks/useWeb3Connect";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box, Button, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const Web3Connect = () => {
  const dispatch = useDispatch();
  const { connectMetamask, connectWalletConnect } = useWeb3Connect();
  const { isShow, type } = useSelector((state: RootState) => {
    return state.web3Modal;
  });

  if (!!isShow && type === "WEB3_CONNECT") {
    return (
      <Modal
        title={"Connect your wallet"}
        isOpen={!!isShow && type === "WEB3_CONNECT"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
        closeOnOverlayClick={false}
      >
        <Box textAlign={"center"}>
          Aliquam porttitor aliquet pulvinar cursus enim duis. Pharetra mattis lobortis maecenas
        </Box>
        <VStack mt={"40px"} spacing={"24px"} align="center">
          <Button variant={"type1"} textStyle={"text-btn"} onClick={connectMetamask}>
            Metamask
          </Button>
          <Button variant={"type1"} textStyle={"text-btn"} onClick={connectWalletConnect}>
            Walletconnect
          </Button>
        </VStack>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Web3Connect;
