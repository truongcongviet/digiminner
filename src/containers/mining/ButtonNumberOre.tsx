import SelectNumberOreButton from "@/src/components/base/SelectNumberOreButton";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";

export interface IButtonNumberOreProps {
  numberOrc: number;
  balance: number | string;
  onClickButton?: (event: "sub" | "add") => void;
}

export default function ButtonNumberOre(props: IButtonNumberOreProps) {
  const { numberOrc, balance, onClickButton } = props;

  return (
    <Center w={"full"} textAlign={"center"} mt="40px">
      <Box onClick={() => (onClickButton ? onClickButton("sub") : console.log("sub"))}>
        <SelectNumberOreButton type="sub" />
      </Box>
      <Text textStyle={"text-number-4"} color="white" mx={"40px"}>
        {numberOrc}
      </Text>
      <Box onClick={() => (onClickButton ? onClickButton("add") : console.log("add"))}>
        <SelectNumberOreButton type="add" />
      </Box>

      <Text textStyle={"text-number-4"} color="white" mx={"40px"}>
        = {balance} Ξ
      </Text>
    </Center>
  );
}
