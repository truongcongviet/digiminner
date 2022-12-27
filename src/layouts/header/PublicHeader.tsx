import TwiterButton from "@/src/components/base/TwiterButton";
import useScrollToHomeSection from "@/src/hooks/useScrollToHomeSection";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import MobileMenuBg from "/public/assets/bg/mobile-menu-bg.png";
import CloseMenu from "/public/assets/images/buttons/close-menu.png";
import Menu from "/public/assets/images/buttons/menu.png";
import LogoMobileDark from "/public/assets/images/logo-dark.svg";
import Logo from "/public/assets/images/logo.svg";
import { useWeb3React } from "@web3-react/core";
import { formatAddress } from "@/src/utils/helpers";
import useWeb3Connect from "@/src/hooks/useWeb3Connect";
import { storageAutoConnect } from "@/src/commons/constants";

type Props = {};

export default function PublicHeader({}: Props) {
  const {
    isOpen: isOpenMobileMenu,
    onClose: onCloseMobileMenu,
    onOpen: onOpenMobileMenu,
  } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { scrollToFAQ, scrollToAbout, scrollToHIW } = useScrollToHomeSection();
  const { isActive, account } = useWeb3React();
  const { disconnect } = useWeb3Connect();

  return (
    <Flex
      align={"center"}
      px={{ base: 2, md: 20 }}
      justifyContent={"space-between"}
      mt={{ base: 6, md: 7 }}
      position={"absolute"}
      w={"full"}
      zIndex={99}
    >
      <Link href={"/"}>
        <Box
          w={{ base: 180, md: 241 }}
          h={{ base: "48px", md: "65px" }}
          bg={`url(${Logo.src})`}
          bgSize={"cover !important"}
          bgRepeat={"round !important"}
          cursor={"pointer"}
        />
      </Link>

      {isLargerThan768 ? (
        <>
          <Flex gap={10} alignItems={"center"}>
            <Box
              textStyle={"text-title-1"}
              cursor={"pointer"}
              onClick={() => {
                scrollToAbout();
              }}
            >
              ABOUT
            </Box>
            <Box textStyle={"text-title-1"} cursor={"pointer"} onClick={() => scrollToHIW()}>
              HOW IT WORKS
            </Box>
            <Box
              textStyle={"text-title-1"}
              cursor={"pointer"}
              onClick={() => {
                scrollToFAQ();
              }}
            >
              FAQ
            </Box>
          </Flex>

          <Flex gap={5} alignItems={"center"}>
            {isActive && account != undefined && (
              <Button
                variant={"type1"}
                size={"unset"}
                p={"14px 27px"}
                textStyle={"text-body-3"}
                onClick={() => {
                  localStorage.removeItem(storageAutoConnect);
                  disconnect();
                }}
              >
                {formatAddress(account, 6, 4)}
              </Button>
            )}
            <TwiterButton />
          </Flex>
        </>
      ) : (
        <Button variant={"unstyled"} minW={"0"} height={"auto"} onClick={onOpenMobileMenu}>
          <Image src={Menu.src} cursor={"pointer"} />
        </Button>
      )}

      {isOpenMobileMenu && <MobileMenu isOpen={true} onClose={onCloseMobileMenu} />}
    </Flex>
  );
}
export interface IMobileMenuProps {
  onClose: DrawerProps["onClose"];
  isOpen: DrawerProps["isOpen"];
}

function MobileMenu({ isOpen, onClose }: IMobileMenuProps) {
  const { scrollToFAQ, scrollToAbout, scrollToHIW } = useScrollToHomeSection();

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody bg={`url(${MobileMenuBg.src})`} px={5} py={6}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Link href={"/"}>
              <Box
                onClick={() => onClose()}
                w={180}
                h={"48px"}
                bg={`url(${LogoMobileDark.src})`}
                bgSize={"cover !important"}
                bgRepeat={"round !important"}
                cursor={"pointer"}
              />
            </Link>
            <DrawerCloseButton position={"static"}>
              <Image src={CloseMenu.src} />
            </DrawerCloseButton>
          </Flex>
          <Flex w={"full"} direction={"column"} alignItems={"center"} mt={"116px"} gap={"48px"}>
            <Box
              color={"white"}
              textStyle={"text-title-8"}
              cursor={"pointer"}
              onClick={() => {
                onClose();
                scrollToAbout();
              }}
            >
              About
            </Box>
            <Box
              color={"white"}
              textStyle={"text-title-8"}
              cursor={"pointer"}
              onClick={() => {
                onClose();
                scrollToHIW();
              }}
            >
              How it works
            </Box>
            <Box
              color={"white"}
              textStyle={"text-title-8"}
              cursor={"pointer"}
              onClick={() => {
                onClose();
                scrollToFAQ();
              }}
            >
              FAQ
            </Box>
            <TwiterButton />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
