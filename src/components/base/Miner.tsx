import { Box, BoxProps } from "@chakra-ui/react";
import gsap from "gsap";
import { ReactNode, useEffect } from "react";
import MessageBoxLarge from "/public/assets/images/message-box-large.png";
import MessageBoxMedium from "/public/assets/images/message-box-medium.png";
import miner from "/public/assets/miner/miner-1.png";

type size = "LARGE" | "MEDIUM";

export interface IMinerProps {
  messageSize?: size;
  isShow: boolean;
  message: ReactNode | string;
}

const ChatBoxProps: { [key in size]: BoxProps } = {
  LARGE: {
    w: "326px",
    h: "250px",
    backgroundImage: MessageBoxLarge.src,
    pt: "35px",
    pl: "5px",
    pr: "30px",
    pb: "60px",
    top: -106,
    left: -205,
  },
  MEDIUM: {
    w: "326px",
    h: "250px",
    backgroundImage: MessageBoxMedium.src,
    pt: "75px",
    pl: "78px",
    pr: "54px",
    pb: "90px",
    top: "-64px",
    left: "-174px",
  },
};

export default function Miner({ messageSize = "LARGE", isShow, message }: IMinerProps) {
  useEffect(() => {
    const tl = gsap.timeline();
    if (isShow) {
      tl.to("#miner", { x: "-314px", duration: 1 });
      tl.from("#message", { opacity: 0, duration: 0.25 });
      tl.to("#message", { opacity: 1, duration: 0.25 });
    } else {
      tl.from("#message", { opacity: 0, duration: 0 });
    }
  }, [isShow, message]);
  console.log(isShow);
  useEffect(() => {
    if (!isShow) {
      const tl = gsap.timeline();
      tl.to("#message", { opacity: 0, duration: 0 });
      tl.to("#miner", { x: "0", duration: 1 });
    }
  }, [isShow]);

  return (
    <Box position={"absolute"} bottom={0} id={"miner"} right={"-314px"}>
      <Box
        w={"314px"}
        h={"314px"}
        // right={"-314px"}
        // bottom={0}
        backgroundImage={miner.src}
      />
      <Box
        id="message"
        opacity={0}
        position={"absolute"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        {...ChatBoxProps[messageSize]}
      >
        {message}
      </Box>
    </Box>
  );
}
