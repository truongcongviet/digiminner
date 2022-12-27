import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { NextPageWithLayout } from "../commons/types";
import TableMining from "../containers/mining/TableMining";
import ButtonNumberOre from "../containers/mining/ButtonNumberOre";
import PrivateSiteLayout from "../layouts/siteLayout/PrivateSiteLayout";

export interface ITempPageProps {}

const DemoPage: NextPageWithLayout = (props: ITempPageProps) => {
  const { isOpen, onClose, onToggle, onOpen } = useDisclosure();
  const [message, setMessage] = useState("");
  const [numberMint, setNumberMint] = useState(1);
  const priceOrc: number = 0.1;

  const increaseEvent = () => {
    numberMint + 1 >= 10 ? setNumberMint(10) : setNumberMint(numberMint + 1);
  };
  const decreaseEvent = () => {
    numberMint - 1 <= 1 ? setNumberMint(1) : setNumberMint(numberMint - 1);
  };

  return (
    <Box w={"100vw"} h={"100vh"} position={"relative"} overflow={"hidden"} bg="#000000">
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
          event == "add" ? increaseEvent() : decreaseEvent();
        }}
      />

      <Box position={"fixed"} bottom="0">
        <TableMining />
      </Box>
    </Box>
  );
};

DemoPage.Layout = PrivateSiteLayout;

export default DemoPage;
