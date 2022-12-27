import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import bgTableImg from "@/public/assets/bg/bg_table.png";
import React from "react";
const TableMining = () => {
  const CustomTab = React.forwardRef((props: any, ref: any) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Tab
        __css={styles.tab}
        textStyle="text-title-9"
        bg={isSelected ? "#902449" : "#651948"}
        {...tabProps}
      >
        <Text opacity={isSelected ? "1" : "0.5"} textStyle="text-title-9" color={"white"}>
          {tabProps.children}
        </Text>
      </Tab>
    );
  });

  const dataRates = [
    { name: "Iron", value: "$0.10-0.20" },
    { name: "Bronze", value: "$0.50-10.00" },
    { name: "Emerald", value: "$10-20" },
    { name: "Gold", value: "$20-50" },
    { name: "Diamond", value: "$50-90" },
    { name: "Vortexia", value: "$90-200" },
  ];

  const dataSupply = [
    { name: "Iron", value: 10000 },
    { name: "Bronze", value: 5000 },
    { name: "Emerald", value: 1000 },
    { name: "Gold", value: 100 },
    { name: "Diamond", value: 50 },
    { name: "Vortexia", value: 10 },
  ];

  return (
    <Tabs isFitted variant="unstyled" w={"491px"} ml="68.88px" mt="18px">
      <TabList px="16px">
        <CustomTab>Rates</CustomTab>
        <CustomTab>Supply</CustomTab>
      </TabList>

      <TabPanels
        bg={`url(${bgTableImg.src})`}
        bgSize="cover"
        bgRepeat={"round"}
        minH={"318px"}
        margin={"-22px 1px"}
        px="60px"
        pt="21px"
      >
        <TabPanel>
          <Text textStyle="text-title-9" color={"white"} mb="7px">
            Exchange rates
          </Text>
          {dataRates &&
            dataRates.map((items, index) => {
              return (
                <Flex mb="4px" key={index}>
                  <Box flex="1" textStyle={"text-body-2"} color="white">
                    {items.name}
                  </Box>
                  <Box flex="1" textStyle={"text-body-2"} color="white">
                    {items.value}
                  </Box>
                </Flex>
              );
            })}
        </TabPanel>
        <TabPanel>
          <Text textStyle="text-title-9" color={"white"} mb="7px">
            Weekly supply remaining
          </Text>
          {dataSupply &&
            dataSupply.map((items, index) => {
              return (
                <Flex mb="4px" key={index}>
                  <Box flex="1" textStyle={"text-body-2"} color="white">
                    {items.name}
                  </Box>
                  <Box flex="1" textStyle={"text-body-2"} color="white">
                    {new Intl.NumberFormat().format(items.value)}
                  </Box>
                </Flex>
              );
            })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TableMining;
