import Modal from "@/src/components/base/Modal";
import useWeb3Connect from "@/src/hooks/useWeb3Connect";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box, Button, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import cancelImg from "@/public/assets/images/buttons/cancel.png";
import Image from "next/image";

const Web3WrongNetWork = () => {
  const dispatch = useDispatch();
  const { switchNetWork } = useWeb3Connect();
  const { isShow, type } = useSelector((state: RootState) => {
    return state.web3Modal;
  });

  if (!!isShow && type === "WRONG_NETWORK") {
    return (
      <Modal
        title={"Wrong network"}
        isOpen={!!isShow && type === "WRONG_NETWORK"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
        closeOnOverlayClick={false}
        headerTop={<Image src={cancelImg.src} priority={true} width={96} height={96} />}
      >
        <Box textAlign={"center"}>Please connect to the appropriate Ethereum network.</Box>
        <VStack mt={"40px"} spacing={"24px"} align="center">
          <Button
            variant={"type1"}
            textStyle={"text-btn"}
            onClick={() => switchNetWork(process.env.NEXT_PUBLIC_CHAIN_ID)}
          >
            Switch to [netWork]
          </Button>
        </VStack>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Web3WrongNetWork;
