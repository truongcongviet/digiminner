import { Box, Container, Input, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { forwardRef, LegacyRef } from "react";
import backgroundImg from "@/public/assets/bg/cave-option-2.png";
import backgroundMobileImg from "@/public/assets/bg/cave-option-2-fixed-mobile.png";
import spiderWebImg from "@/public/assets/bg/spider-web.png";
import boardImg from "@/public/assets/UI/board.png";
import boardMobileImg from "@/public/assets/UI/board-mobile.png";
import TableOreExchange from "./TableOreExchange";

interface InputFieldProps {}

const SpiderWeb = () => {
  return (
    <Box
      pos="absolute"
      bg={`url(${spiderWebImg.src})`}
      bgSize="cover"
      bgRepeat={"round"}
      minH={{
        base: "136.62px",
        md: "810px",
      }}
      w={"100%"}
      zIndex="-1"
      mt={{
        base: "30px",
        md: "15px",
      }}
    ></Box>
  );
};

const Pg3 = () => {
  return (
    <Box
      pos="absolute"
      bg={{
        base: `url(${backgroundMobileImg.src})`,
        md: `url(${backgroundImg.src})`,
      }}
      bgSize={{ base: "cover", md: "cover" }}
      bgRepeat={{ base: "round", md: "round" }}
      minH={{
        base: "391.32px",
        md: "661px",
      }}
      w={"100%"}
      zIndex="-1"
      mt={{
        base: "677.62px",
        md: "500px",
      }}
    ></Box>
  );
};
const Rectangle1519 = () => {
  return (
    <Box
      pos="absolute"
      bg="#270E30"
      minH="471.71px"
      w={"100%"}
      h={{
        base: "471.71px",
        md: "1150px",
      }}
      zIndex="-2"
    ></Box>
  );
};

const Frame34128 = () => {
  return (
    <Box
      m={"0 auto"}
      w={{
        base: "340px",
        md: "630px",
      }}
      pt={{
        base: "131px",
        md: "183px",
      }}
      textAlign={"center"}
    >
      <Text
        textStyle={{
          base: "text-title-5",
          md: "text-title-2",
        }}
        color="white"
      >
        It pays to mine
      </Text>
      <Text
        mt={{
          base: "24px",
          md: "32px",
        }}
        textStyle={{
          base: "text-body-3",
          md: "text-body-1",
        }}
        color="white"
      >
        Each{" "}
        <Link href="" color={"green"} textDecoration="underline">
          Digi Miner
        </Link>{" "}
        grants access to the mines. Every week a miner can pay .01 ETH to collect ore. A single
        miner can collect up to 10 ore per week. The ore is backed by stable coin and can be
        redeemed for money instantly.
      </Text>
    </Box>
  );
};

const dataDefault = [
  {
    type: "Iron",
    reward: "$0.50-10.00",
    winner: "1000",
  },
  {
    type: "Bronze",
    reward: "$10-20",
    winner: "100",
  },
  {
    type: "Emerald",
    reward: "$20-50",
    winner: "50",
  },
  {
    type: "Gold",
    reward: "$50-90",
    winner: "30",
  },
  {
    type: "Diamond",
    reward: "$90-200",
    winner: "15",
  },
  {
    type: "Vortexia",
    reward: "$90-200",
    winner: "5",
  },
];
const OreExchangeTable = () => {
  return (
    <Box
      m={{
        base: "17px auto",
        md: "57px auto",
      }}
      w={{
        base: "100%",
        md: "785px",
      }}
      bg={{
        base: `url(${boardMobileImg.src})`,
        md: `url(${boardImg.src})`,
      }}
      bgSize="cover"
      bgRepeat={"round"}
      minH={{
        base: "381.83px",
        md: "487px",
      }}
      textAlign={"center"}
    >
      <Text
        textStyle={{ base: "text-title-6", md: "text-title-4" }}
        pt={{
          base: "120px",
          md: "146px",
        }}
        color="white"
      >
        Ore exchange
      </Text>
      <TableOreExchange data={dataDefault} />
    </Box>
  );
};

const HomePayMint = () => {
  return (
    <Box
      pos={"relative"}
      h={{
        base: "1070px",
        md: "1150px",
      }}
    >
      <SpiderWeb />
      <Pg3 />
      <Rectangle1519 />
      <Frame34128 />
      <OreExchangeTable />
    </Box>
  );
};

export default HomePayMint;
