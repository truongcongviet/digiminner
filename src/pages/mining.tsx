import { Box, Button, Flex, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NextPageWithLayout } from "../commons/types";
import MiningProcess from "../containers/miningView/MiningProcess";
import SelectNumberOre from "../containers/miningView/SelectNumberOre";
import PrivateSiteLayout from "../layouts/siteLayout/PrivateSiteLayout";
import useTranslations from "../utils/translation";
import { gsap } from "gsap";
import Miner from "../components/base/Miner";
import { openWeb3Modal } from "../redux/slices/web3ModalSlice";
import { useDispatch } from "react-redux";
import Modal from "../components/base/Modal";

export interface IMinningProps {}

const Mining: NextPageWithLayout = (props: any) => {
  const t = useTranslations();
  const dispatch = useDispatch();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  // const [pageNow, setPage] = useState(false);
  // const [tokenIdHolding, setTokenIdHolding] = useState("");
  const [pageNow, setPage] = useState(false);
  const [tokenIdHolding, setTokenIdHolding] = useState("2");
  const [numberMint, setNumberMint] = useState(1);
  const {
    isOpen: isShowMiner,
    onClose: handleHideMiner,
    onOpen: handleShowMiner,
  } = useDisclosure();

  const [message, setMessage] = useState<any>("");
  const priceOrc: number = 0.1;

  const handleIncrease = () => {
    if (numberMint + 1 > 10) {
      !isShowMiner &&
        setMessage(
          <Flex alignItems={"center"} flexDirection="column">
            <Box
              p="20px"
              textStyle={"text-body-2"}
              fontWeight="700"
              lineHeight="1.3"
              textAlign={"center"}
            >
              1 miner can only purchase 10 ore per week. Purchase another miner to keep mining
            </Box>
            <Box
              textStyle={"text-body-2"}
              fontWeight="700"
              lineHeight="1.4"
              textTransform={"uppercase"}
              letterSpacing="0.02em"
              onClick={() => console.log("Buy NFT")}
              cursor="pointer"
            >
              <Text>Buy a miner</Text>
              <Box border={"2px solid #000000"} height="0px"></Box>
            </Box>
          </Flex>
        );
      !isShowMiner && handleShowMiner();

      setTimeout(() => {
        setMessage("");
        handleHideMiner();
      }, 3500);
    } else {
      numberMint + 1 === 10 ? setNumberMint(10) : setNumberMint(numberMint + 1);
      isShowMiner && setMessage("");
      isShowMiner && handleHideMiner();
    }
  };
  const handleDecrease = () => {
    numberMint - 1 <= 1 ? setNumberMint(1) : setNumberMint(numberMint - 1);
    isShowMiner && setMessage("");
    isShowMiner && handleHideMiner();
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#miner", { x: "314px", duration: 1 });
  }, []);

  return (
    <Flex w={"full"} overflow={"hidden"} position={"relative"}>
      {pageNow ? (
        <MiningProcess tokenIdHolding={tokenIdHolding} />
      ) : (
        <SelectNumberOre
          numberMint={numberMint}
          priceOrc={priceOrc}
          handleDecrease={() => handleDecrease()}
          handleIncrease={() => handleIncrease()}
          handleSetPage={() => setPage(!pageNow)}
          handleSetIdHolding={(tokenIdHolding) => setTokenIdHolding(tokenIdHolding)}
        />
      )}

      <Miner message={<Box>{message}</Box>} isShow={isShowMiner} messageSize={"LARGE"} />

      <Modal
        title={"To play the game, open this website on desktop."}
        isOpen={!isLargerThan768}
        showCloseButton={false}
        closeOnOverlayClick={false}
      />
    </Flex>
  );
};

Mining.Layout = PrivateSiteLayout;

export default Mining;
