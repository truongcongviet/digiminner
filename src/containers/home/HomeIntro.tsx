import useHandleMintButton from "@/src/hooks/useHandleMintButton";
import { openWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import BackgroundMobile from "/public/assets/bg/home-intro-bg-mobile.png";
import Background from "/public/assets/bg/home-intro-bg.png";
export interface IHomeIntroProps {}

export default function HomeIntro(props: IHomeIntroProps) {
  const dispatch = useDispatch();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isActive } = useWeb3React();
  const { handler, label } = useHandleMintButton();

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
      backgroundRepeat={"round !important"}
      backgroundSize={"cover !important"}
      bg={{ base: `url(${BackgroundMobile.src})`, md: `url(${Background.src})` }}
      minH={{ base: "930px", md: "948px" }}
      w={"full"}
    >
      <Flex
        direction={"column"}
        gap={10}
        px={{ base: 5, md: 20 }}
        mt={{ base: 130, md: 418 }}
        w={"full"}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box
          w={{ base: "unset", md: "558px" }}
          textStyle={{ base: "text-title-4", md: "text-title-7" }}
          color={"white"}
          style={{
            WebkitTextStroke: "2px #000000",
          }}
        >
          Easy there, traveler. This way’s miners only
        </Box>

        <Box>
          {isActive ? (
            <Button variant={"type2"} textStyle={"text-btn"} onClick={handler}>
              {label}
            </Button>
          ) : (
            <Button variant={"type2"} textStyle={"text-btn"} onClick={connectWeb3}>
              connect wallet
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
