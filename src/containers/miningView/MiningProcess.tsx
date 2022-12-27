import Label from "@/src/components/base/Label";
import Ore, { IOreProps } from "@/src/components/base/Ore";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useContractDigiMinersMinging from "@/src/hooks/useContractDigiMinersMinging";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { motion, isValidMotionProp } from "framer-motion";
import TableMining from "../mining/TableMining";
import { ethers } from "ethers";

export interface IMiningProcessProps {
  tokenIdHolding: string;
}

interface ITicket {
  status: IOreProps["status"];
  ticketKey: string;
  tokenIdHolding: string;
}

export default function MiningProcess(props: IMiningProcessProps) {
  const { tokenIdHolding } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const [listTicket, setListTicket] = useState<ITicket[]>([]);
  const { getTicketHolding, getTicketDetails } = useContractDigiMinersMinging();
  const { contract, account } = useSelector((state: RootState) => state.miningContract);

  useEffect(() => {
    async function effect() {
      const listTicket = await getTicketHolding();
      let convertListTicket: ITicket[] = [];
      if (listTicket != undefined) {
        for (let index = 0; index < listTicket.length; index++) {
          const item = listTicket[index];
          const ticketDetail = await getTicketDetails(item);
          console.log("ticketDetail", ticketDetail);
          if (ticketDetail != undefined) {
            convertListTicket.push({
              status: ticketDetail?.claimed == true ? "mining" : "unmined",
              ticketKey: ethers.BigNumber.from(ticketDetail.ticketKey).toString(),
              tokenIdHolding: item,
            });
          }
        }

        listTicket != undefined && setListTicket([...convertListTicket]);
      }
    }
    effect();
  }, [tokenIdHolding, contract, account]);

  console.log("listTicket", listTicket);

  const handleOreMining = async (ticketKey: string, index: number) => {
    console.log(ticketKey);

    // Set value
    let convertListTicket: ITicket[] = [...listTicket];
    convertListTicket[index].status = "mining";
    setListTicket([...convertListTicket]);
    
    // Call
  };

  const RenderListOre = () => {
    //   <Ore status="mining" resultType="Diamond" />
    // <Ore status="mining" resultType="Diamond" />
    // <Ore status="mining" resultType="Vortexia" />
    // <Ore status="mining" resultType="Iron" />
    // <Ore status="mining" />
    // <Ore status="unmined" />
    return (
      <>
        {listTicket &&
          listTicket.map((ore: ITicket, index: number) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  if (ore.status !== "unmined") {
                    return;
                  }
                  handleOreMining(ore.ticketKey, index);
                }}
              >
                <Ore status={ore.status} />
              </Box>
            );
          })}
      </>
    );
  };

  return (
    <Box w={"full"} h={"full"} position={"relative"}>
      <Flex
        w={"full"}
        h={"full"}
        justify={"center"}
        align={"center"}
        px={"75px"}
        direction={"column"}
      >
        <Flex direction={"column"} gap={4} align={"center"} mb={10}>
          <Box textStyle={"text-title-11"} color={"white"}>
            Total Earned
          </Box>
          <Label>${totalPrice}</Label>
        </Flex>
        <Flex gap={10} align={"center"}>
          <RenderListOre />
        </Flex>
      </Flex>
      <Box
        as={motion.div}
        position={"fixed"}
        initial={{ translateY: "-20%" }}
        whileHover={{ translateY: "-108%" }}
        whileFocus={{ translateY: "-108%" }}
        whileTap={{ translateY: "-118%" }}
        transition="0.2s all ease-out"
      >
        <TableMining />
      </Box>
    </Box>
  );
}
