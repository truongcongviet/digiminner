import { Box, BoxProps, Flex, useRadio, UseRadioProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import RadioCheckedBg from "/public/assets/images/radioButtons/radio-checked.svg";
import RadioUncheckedBg from "/public/assets/images/radioButtons/radio-unchecked.svg";

export interface IRadioProps extends UseRadioProps {
  children: ReactNode | string;
  width?: BoxProps["width"];
  height?: BoxProps["height"];
}

function Radio({ children, height = "full", width = "full", ...props }: IRadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      textStyle={"text-title-9"}
      color={"black"}
      w={width}
      height={height}
      mt={"0 !important"}
      cursor={"pointer"}
    >
      <input {...input} />
      <Flex align={"center"} gap={4} w={"full"} h={"full"}>
        <Box
          {...checkbox}
          _checked={{
            bg: `url(${RadioCheckedBg.src})`,
          }}
          backgroundImage={`url(${RadioUncheckedBg.src})`}
          w={"24px"}
          h={6}
        />
        <Box flex={1} minW={0}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

export default Radio;
