import { LayoutProps } from "@/src/commons/types";
import { Box, Flex } from "@chakra-ui/react";
import PublicFooter from "../footer/PublicFooter";
import PublicHeader from "../header/PublicHeader";

export default function PublicSiteLayout({ children }: LayoutProps) {
  return (
    <Flex w={"full"} minH={"100vh"} flexDirection={"column"}>
      <PublicHeader />
      <Flex flex={1} minH={0}>
        {children}
      </Flex>
      <PublicFooter />
    </Flex>
  );
}
