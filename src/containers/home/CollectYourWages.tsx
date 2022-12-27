import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import Background from "/public/assets/bg/collect-your-wages-bg.png";
import MobileBackground from "/public/assets/bg/mobile-wage-bg.png";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { openWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import useHandleMintButton from "@/src/hooks/useHandleMintButton";

export interface ICollectYourWagesProps {}

export default function CollectYourWages(props: ICollectYourWagesProps) {
  const { handler, label } = useHandleMintButton();
  const { isActive } = useWeb3React();
  const dispatch = useDispatch();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const connectWeb3 = () => {
    isLargerThan768
      ? dispatch(
          openWeb3Modal({
            type: "WEB3_CONNECT",
          })
        )
      : dispatch(
          openWeb3Modal({
            type: "NOT_SUPPORT",
          })
        );
  };

  return (
    <Flex
      w={"full"}
      h={{ base: "741px", md: "533px" }}
      backgroundImage={{ base: `url(${MobileBackground.src})`, md: `url(${Background.src})` }}
      bgSize={"cover !important"}
      bgRepeat={{ base: "round !important", md: "round !important" }}
      justify={"center"}
      px={2}
      pt={{ base: 210, md: 110 }}
    >
      <Flex
        w={{ base: "full", md: "500px" }}
        maxW={"full"}
        direction={"column"}
        alignItems={"center"}
      >
        <Box textStyle={"text-title-4"} color={"white"} textAlign={"center"}>
          Collect your wages
        </Box>
        <Box mt={8} textAlign={"center"} textStyle={"text-body-1"} color={"white"}>
          Mine up to 10 ore per transaction. The exchange rate for your ore is paid immediately to
          the wallet you connect.
        </Box>
        <Flex mt={10} gap={6} direction={{ base: "column", md: "row" }}>
          {!isActive && (
            <Button variant={"type2"} onClick={connectWeb3}>
              connect wallet
            </Button>
          )}
          {isActive && (
            <Button variant={"type2"} onClick={handler}>
              {label}
            </Button>
          )}
          <Button>Get access</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
