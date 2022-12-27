import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import SubtractImg from "@/public/assets/bg/Subtract.png";
import SubtractMobileImg from "@/public/assets/bg/Subtract_mobile.png";
import XImg from "@/public/assets/images/buttons/X.png";
export interface ModalProps {
  isOpen: boolean;
  onClose?: any;
  children?: ReactNode;
  showCloseButton?: boolean;
  type?: "warning" | "success" | "normal";
  title?: string | ReactNode;
  headerTop?: ReactNode;
  footer?: ReactNode;
  size?: string | object;
  closeOnOverlayClick?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = false,
  title = "",
  type = "normal",
  headerTop,
  footer,
  size = "lg",
  closeOnOverlayClick = true,
}: ModalProps) => {
  const titleColor: { [key in typeof type]: string } = {
    normal: "black",
    success: "black",
    warning: "black",
  };

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <ModalChakra
      closeOnOverlayClick={closeOnOverlayClick}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        // bgImage={{
        //   base: `url(${SubtractMobileImg.src})`,
        //   md: `url(${SubtractImg.src})`,
        // }}
        backgroundColor={"transparent"}
        bgSize={{ base: "cover", md: "cover" }}
        bgRepeat={{ base: "round", md: "round" }}
        minH={{ base: "250px", md: "448px" }}
        minW={{ base: "250xp", md: "582px" }}
        mx={{ base: "20px" }}
        p={{
          base: "34px 50px",
          md: "72px 81px",
        }}
      >
        <Image
          position={"absolute"}
          w={"full"}
          h={"full"}
          src={isLargerThan768 ? SubtractImg.src : SubtractMobileImg.src}
          top={0}
          left={0}
          zIndex={-1}
        />
        <Flex direction={"column"}>
          {headerTop && <Center mb={1}>{headerTop}</Center>}
          {title && (
            <ModalHeader p={0} mb={type === "normal" ? 6 : 1}>
              <Box
                textStyle={{
                  base: "text-title-6",
                  md: "text-title-8",
                }}
                color={titleColor[type]}
                textAlign={"center"}
              >
                {title}
              </Box>
            </ModalHeader>
          )}
        </Flex>
        {showCloseButton && (
          <ModalCloseButton>
            <Image src={XImg.src} />
          </ModalCloseButton>
        )}
        {children && <ModalBody p={0}>{children}</ModalBody>}
        {footer && (
          <ModalFooter
            mt={{
              base: type === "success" || type === "warning" ? "24px" : "32px",
              md: type === "success" || type === "warning" ? "48px " : "40px",
            }}
            p={0}
          >
            {footer}
          </ModalFooter>
        )}
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;
