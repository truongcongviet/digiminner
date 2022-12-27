import { LayoutProps } from "@/src/commons/types";
import { Flex } from "@chakra-ui/react";
import PrivateHeader from "../header/PrivateHeader";
import Backround from "/public/assets/bg/mining-bg.png";

export default function PrivateSiteLayout({ children }: LayoutProps) {
  return (
    <Flex
      w={"full"}
      minH={"100vh"}
      flexDirection={"column"}
      overflow={"auto"}
      backgroundImage={Backround.src}
      backgroundSize={"cover !important"}
      backgroundRepeat={"round !important"}
    >
      <PrivateHeader />
      <Flex flex={1} minH={0}>
        {children}
      </Flex>
    </Flex>
  );
}
