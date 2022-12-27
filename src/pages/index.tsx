import { Box, Flex } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NextPageWithLayout } from "../commons/types";
import CollectYourWages from "../containers/home/CollectYourWages";
import HomeIntro from "../containers/home/HomeIntro";
import HomeFAQ from "../containers/homeFAQ/homeFAQ";
import HomePayMint from "../containers/homePayMint/homePayMint";
import PublicSiteLayout from "../layouts/siteLayout/PublicSiteLayout";
import useTranslations from "../utils/translation";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export interface ISwapPageProps {}

const Index: NextPageWithLayout = (props: any) => {
  const t = useTranslations();

  return (
    <Flex direction={"column"} w={"full"} id={"container"}>
      <Box id={"home-about"} zIndex={3}>
        <HomeIntro />
      </Box>

      <Box position={"relative"} marginTop={{ base: "-46px", md: "-62px" }}>
        <Box id="home-hiw" top={{ base: "20px", md: "90px" }} position={"absolute"} />
        <HomePayMint />
      </Box>

      <Box zIndex={1} marginTop={{ base: "-120px", md: "0px" }}>
        <CollectYourWages />
      </Box>

      <Box position={"relative"} marginTop={{ base: "-105px", md: "-485px" }}>
        <Box id="home-faq" top={{ base: "215px", md: "525px" }} position={"absolute"} />
        <HomeFAQ />
      </Box>
    </Flex>
  );
};

Index.Layout = PublicSiteLayout;

export default Index;
