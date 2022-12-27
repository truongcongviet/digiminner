import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import LabelBg from "/public/assets/images/label-bg.png";

export interface ILabelProps {
  children: ReactNode | string;
}

export default function Label({ children }: ILabelProps) {
  return (
    <Flex
      minW={416}
      minH={134}
      backgroundImage={LabelBg.src}
      backgroundSize={"cover"}
      backgroundRepeat={"round"}
      p={3}
      justify={"center"}
      align={"center"}
      textStyle={"text-title-10"}
      color={"white"}
    >
      {children}
    </Flex>
  );
}
