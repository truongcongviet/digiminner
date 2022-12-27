import {
  Box,
  Button,
  Center,
  Image,
  Text,
  chakra,
  shouldForwardProp,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ButtonNumberOre from "../mining/ButtonNumberOre";
import TableMining from "../mining/TableMining";
import BackgroundOrcImg from "@/public/assets/images/ores/bg_orc.png";
import { motion, isValidMotionProp } from "framer-motion";
import ChooseMinerModal from "../mining/ChooseMinerModal";
import { useWeb3React } from "@web3-react/core";
import axiosInstance from "@/src/utils/axios";
import useContractDigiMinersMinging from "@/src/hooks/useContractDigiMinersMinging";

export interface ISelectNumberOreProps {
  numberMint: number;
  priceOrc: number;
  handleIncrease?: () => void;
  handleDecrease?: () => void;
  handleSetPage?: () => void;
  handleSetIdHolding?: (tokenIdHolding: string) => void;
}
interface LabelMinerOptionProps {
  name: string;
  level: number;
}

export default function SelectNumberOre(props: ISelectNumberOreProps) {
  const {
    numberMint,
    priceOrc,
    handleIncrease,
    handleDecrease,
    handleSetPage,
    handleSetIdHolding,
  } = props;
  const { account } = useWeb3React();
  const { buyTickets } = useContractDigiMinersMinging();
  const {
    isOpen: isShowChooseMiner,
    onClose: handleHideChooseMiner,
    onOpen: handleShowChooseMiner,
  } = useDisclosure();
  const [options, setOptions] = useState([]);

  const LabelMinerOption = ({ level, name }: LabelMinerOptionProps) => {
    return (
      <Flex align={"center"} gap={4}>
        <Box noOfLines={1}>{name}</Box>
        <Box ml={"auto"} minW={"fit-content"}>
          Level {level}
        </Box>
      </Flex>
    );
  };

  useEffect(() => {
    async function effect() {
      const getListNFT = await axiosInstance.get(
        `public-mint/signature-buy-ticket?account=${account}`
      );
      if (getListNFT?.data?.listNFT) {
        const listNFT = getListNFT?.data?.listNFT.map((item: string) => {
          return {
            value: item,
            label: <LabelMinerOption level={1} name={`DigiMiner#${item}`} />,
          };
        });
        setOptions(listNFT);
      }
    }
    if (typeof account === "string") {
      effect();
    }
  }, [account]);

  // const options = [
  //   {
  //     value: "1",
  //     label: <LabelMinerOption level={12} name={"DigiMiner#721"} />,
  //   },
  //   { value: "2", label: <LabelMinerOption level={1} name={"DigiMiner#722"} /> },
  // ];

  const callBuyTicket = async (tokenIdHolding: string | undefined) => {
    console.log("tokenIdHolding", tokenIdHolding);
    if (tokenIdHolding != undefined) {
      // call get signtura
      const { data } = await axiosInstance.post("public-mint/signature-buy-ticket", {
        account: account,
        tokenIdHolding: tokenIdHolding,
        quantity: numberMint,
      });
      if (data) {
        console.log("signature", data);
        // call buy ticket
        const RBuyTickets = await buyTickets(
          data.signature,
          numberMint,
          parseInt(tokenIdHolding),
          1
        );
        console.log("RBuyTickets", RBuyTickets);
        if (RBuyTickets?.transactionHash != undefined) {
          handleSetIdHolding && handleSetIdHolding(tokenIdHolding);
          handleSetPage && handleSetPage();
        }
      }
    }
  };

  return (
    <Box w={"full"} h={"full"} position={"relative"}>
      <Box mt="158px" textAlign="center">
        <Text textStyle={"text-title-4"} color="white">
          Take a swing at fortune
        </Text>
        <Text textStyle={"text-body-1"} color="white" mt="16px">
          Select number of ore to mine
        </Text>
      </Box>

      <ButtonNumberOre
        numberOrc={numberMint}
        balance={(numberMint * priceOrc).toFixed(2)}
        onClickButton={(event) => {
          event == "add"
            ? handleIncrease
              ? handleIncrease()
              : null
            : handleDecrease
            ? handleDecrease()
            : null;
        }}
      />

      <Center mt={"69px"}>
        <Image src={BackgroundOrcImg.src} />
      </Center>
      {/* handleSetPage ? handleSetPage() : null */}
      <Center mt={"67px"}>
        <Button variant={"type2"} onClick={() => handleShowChooseMiner()}>
          Continue
        </Button>
      </Center>

      <Box
        as={motion.div}
        position={"fixed"}
        initial={{ translateY: "59%" }}
        whileHover={{ translateY: "-28%" }}
        whileFocus={{ translateY: "-28%" }}
        whileTap={{ translateY: "-32%" }}
        transition="0.2s all ease-out"
      >
        <TableMining />
      </Box>

      <ChooseMinerModal
        options={options}
        isShow={isShowChooseMiner}
        onClose={handleHideChooseMiner}
        onSubmit={(value) => callBuyTicket(value)}
        defaultValue={"1"}
      />
    </Box>
  );
}
