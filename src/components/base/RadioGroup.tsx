import { useRadioGroup, UseRadioGroupProps, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Radio from "./Radio";

export interface IRadioGroupProps extends UseRadioGroupProps {
  options: {
    value: string;
    label: ReactNode;
  }[];
}

function RadioGroup({ options, ...props }: IRadioGroupProps) {
  const { getRadioProps } = useRadioGroup(props);

  return (
    <VStack gap={6}>
      {options.map(({ value, label }) => {
        value = value;
        const radio = getRadioProps({ value });
        return (
          <Radio key={value} {...radio}>
            {label}
          </Radio>
        );
      })}
    </VStack>
  );
}

export default RadioGroup;
