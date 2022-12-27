import PublicFooterBg from "/public/assets/bg/public-footer-bg.png";
import PublicFooterBgMobile from "/public/assets/bg/public-footer-bg-mobile.png";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "/public/assets/images/logo-dark.svg";
import Image from "next/image";
import TwiterButton from "@/src/components/base/TwiterButton";
import useScrollToHomeSection from "@/src/hooks/useScrollToHomeSection";

export interface IPublicFooterProps {}

export default function PublicFooter(props: IPublicFooterProps) {
  const { scrollToFAQ, scrollToAbout, scrollToHIW } = useScrollToHomeSection();
  return (
    <Flex
      w={"full"}
      h={{
        base: "822px",
        md: "350px",
      }}
      marginTop={"-1px"}
      backgroundSize={"cover !important"}
      backgroundRepeat={"round !important"}
      backgroundImage={{
        base: `url(${PublicFooterBgMobile.src})`,
        md: `url(${PublicFooterBg.src})`,
      }}
      px={{ base: "8px", md: "70px" }}
      py={{ base: "70px", md: "30px" }}
      direction={"column"}
      justifyContent={"flex-end"}
    >
      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
      >
        <Link href={"/"}>
          <Box cursor={"pointer"}>
            <Image src={Logo.src} width={"228px"} height={"64px"} />
          </Box>
        </Link>
        <Flex
          gap={{ base: "24px", md: "40px" }}
          align={"center"}
          textStyle={"text-title-1"}
          direction={{ base: "column", md: "row" }}
          mt={{ base: "60px", md: "unset" }}
        >
          <Box
            cursor={"pointer"}
            color={"white"}
            onClick={() => {
              scrollToAbout();
            }}
          >
            ABOUT
          </Box>

          <Box
            cursor={"pointer"}
            color={"white"}
            onClick={() => {
              scrollToHIW();
            }}
          >
            HOW IT WORKS
          </Box>

          <Box
            cursor={"pointer"}
            color={"white"}
            onClick={() => {
              scrollToFAQ();
            }}
          >
            FAQ
          </Box>
        </Flex>
        <Box mt={{ base: "56px", md: "unset" }}>
          <TwiterButton />
        </Box>
      </Flex>

      <Divider backgroundColor={"white"} color={"white"} mt={"42px"} mb={"32px"} opacity={0.2} />

      <Flex
        justify={"space-between"}
        align={"center"}
        direction={{ base: "column-reverse", md: "row" }}
        gap={{ base: "56px", md: undefined }}
      >
        <Box
          color={"white"}
          opacity={0.5}
          textStyle={{ base: "text-body-3", md: "text-title-1" }}
          textAlign={"center"}
        >
          © 2022 Digi Miners. All rights reserved.
        </Box>
        <Flex gap={{ base: 6, md: 10 }} direction={{ base: "column", md: "row" }} align={"center"}>
          <Link href={"/terms-of-service"}>
            <Box color={"white"} textStyle={"text-title-1"} cursor={"pointer"}>
              TERMS OF SERVICE
            </Box>
          </Link>
          <Link href={"/privacy-policy"}>
            <Box color={"white"} textStyle={"text-title-1"} cursor={"pointer"}>
              PRIVACY POLICY
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
