import MinerMove1 from "@/public/assets/miner/miner-move-1.png";
import MinerMove2 from "@/public/assets/miner/miner-move-2.png";
import Modal from "@/src/components/base/Modal";
import { closeWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { Box, Flex, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const animationKeyframes = keyframes`
  0% { background-image: url(${MinerMove1.src}); }
  50% { background-image: url(${MinerMove2.src}); }
  100% { background-image: url(${MinerMove1.src}); }
`;

const animation = `${animationKeyframes} 1.5s infinite`;

export default function TransactionLoadingModal() {
  const dispatch = useDispatch();
  const { isShow, type, title, content, footer } = useSelector((state: RootState) => {
    return state.web3Modal;
  });

  const [numberOfDot, setNumberOfDot] = useState(3);
  const [minerMove, setMinerMove] = useState(MinerMove1.src);

  const isComponentShow = !!isShow && type === "TRANSCTION_LOADING";

  useEffect(() => {
    if (isComponentShow) {
      const interval = setInterval(() => {
        if (minerMove === MinerMove1.src) {
          setMinerMove(MinerMove2.src);
        } else {
          setMinerMove(MinerMove1.src);
        }

        if (numberOfDot === 3) {
          setNumberOfDot((prev) => 1);
        } else {
          setNumberOfDot((prev) => prev + 1);
        }
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [type, isShow, numberOfDot]);

  if (isComponentShow) {
    return (
      <Modal
        title={
          <Box pt={8} w={"full"} position={"relative"} pr={"65px"}>
            {title}
            <Box position={"absolute"} display={"inline-block"}>
              {Array(numberOfDot)
                .fill("")
                .map((x) => ".")}
            </Box>
          </Box>
        }
        isOpen={isComponentShow}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={false}
        closeOnOverlayClick={false}
        footer={footer}
        headerTop={
          <Flex w={"full"} justify={"center"}>
            <Box
              as={motion.div}
              // animation={animation}
              backgroundImage={`url(${minerMove})`}
              style={{
                width: "167px",
                height: "191px",
              }}
            />
          </Flex>
        }
      ></Modal>
    );
  } else {
    return null;
  }
}
