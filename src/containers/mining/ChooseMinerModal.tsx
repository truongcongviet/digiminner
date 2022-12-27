import Modal from "@/src/components/base/Modal";
import RadioGroup, { IRadioGroupProps } from "@/src/components/base/RadioGroup";
import { Box, Button, Flex, RadioGroupProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface IChooseMinerModalProps {
  options: IRadioGroupProps["options"];
  onSubmit: (value?: string) => void;
  defaultValue?: string;
  isShow?: boolean;
  onClose: () => void;
}

export default function ChooseMinerModal({
  onSubmit,
  options = [],
  defaultValue,
  isShow = false,
  onClose,
}: IChooseMinerModalProps) {
  const [currentValue, setCurrentValue] = useState(defaultValue);


  useEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  
  return (
    <Modal
      isOpen={isShow}
      onClose={onClose}
      title={"Choose your Miner"}
      showCloseButton
      footer={
        <Flex justify={"center"} w={"full"}>
          <Button
            variant={"type2"}
            onClick={() => {
              onSubmit(currentValue);
            }}
          >
            Confirm
          </Button>
        </Flex>
      }
    >
      <Flex direction={"column"}>
        <Box textAlign={"center"} mb={10}>
          To proceed with the purchase, please select a DigiMiner you’d like to use for mining the
          ores.
        </Box>

        <RadioGroup
          options={options}
          onChange={(newValue) => setCurrentValue(newValue)}
          defaultValue={defaultValue}
        />
      </Flex>
    </Modal>
  );
}
