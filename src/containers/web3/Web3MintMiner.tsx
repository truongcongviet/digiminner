import Modal from "@/src/components/base/Modal";
import SelectNumberOreButton from "@/src/components/base/SelectNumberOreButton";
import useContractDigiMinersNFT from "@/src/hooks/useContractDigiMinersNFT";
import useMerkleTree from "@/src/hooks/useMerkleTree";
import { closeWeb3Modal, openWeb3Modal } from "@/src/redux/slices/web3ModalSlice";
import { RootState } from "@/src/redux/store";
import { capitalizeFirstLetter } from "@/src/utils/string";
import { getSignaturePublicMint } from "@/src/utils/web3";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IMetaData {
  publicSalePhase: boolean;
  allowListPhase: boolean;
  totalAllowListMinted: number;
  allowListLimitPerWallet: number;
  publicMinted: boolean;
}

const Web3MintMiner = () => {
  const router = useRouter();
  const {
    allowListMint,
    publicMint,
    callable,
    getPhasesMintActive,
    getAllowListLimitPerWallet,
    getTotalAllowListMinted,
    checkPublicMinted,
  } = useContractDigiMinersNFT();
  const { getMerkleHexProof, checkWhiteListUser, getMerkleRoot } = useMerkleTree();
  const { account = "", isActive } = useWeb3React();
  const dispatch = useDispatch();
  const { isShow, type } = useSelector((state: RootState) => {
    return state.web3Modal;
  });
  const [numberMint, setNumberMint] = useState(0);
  const [metaData, setMetaData] = useState<IMetaData>({
    allowListPhase: false,
    publicSalePhase: false,
    totalAllowListMinted: 0,
    allowListLimitPerWallet: 0,
    publicMinted: false,
  });

  const tokenIdRef = useRef<string>("");

  const canMintAllowList = metaData.totalAllowListMinted < metaData.allowListLimitPerWallet;

  const initMetaData = async () => {
    const [phases, totalAllowListMinted, allowListLimitPerWallet, publicMinted] = await Promise.all(
      [
        getPhasesMintActive(),
        getTotalAllowListMinted(account),
        getAllowListLimitPerWallet(),
        checkPublicMinted(account),
      ]
    );
    setMetaData({
      publicSalePhase: phases.includes("PUBLIC"),
      allowListPhase: phases.includes("ALLOW_LIST"),
      totalAllowListMinted: totalAllowListMinted,
      allowListLimitPerWallet: allowListLimitPerWallet || 0,
      publicMinted: publicMinted,
    });
  };

  const handleViewOnOpenSea = () => {
    if (tokenIdRef.current) {
      window.open(
        `${process.env.NEXT_PUBLIC_OPENSEA_URL}/${process.env.NEXT_PUBLIC_CONTRACT_DIGI_MINERS_NFT_MINT_ADDRESS}/${tokenIdRef.current}`
      );
    }
  };

  useEffect(() => {
    if (callable && isShow) {
      (async () => {
        await initMetaData();
      })();
    }
  }, [callable, account, isShow]);

  const handleIncrease = () => {
    let newNumberMint = numberMint + 1;
    if (
      metaData.allowListPhase &&
      metaData.totalAllowListMinted + newNumberMint <= metaData.allowListLimitPerWallet
    ) {
      setNumberMint(newNumberMint);
      return;
    } else if (metaData.publicSalePhase && !metaData.publicMinted && newNumberMint <= 1) {
      setNumberMint(newNumberMint);
    }
  };

  const handleDecrease = () => {
    let newNumberMint = numberMint - 1;
    if (newNumberMint > 0) {
      setNumberMint(newNumberMint);
    }
  };

  const handleMint = async () => {
    try {
      if (!numberMint) {
        dispatch(closeWeb3Modal());
        return;
      }
      let res: any;
      if (callable) {
        dispatch(
          openWeb3Modal({
            type: "TRANSCTION_LOADING",
            title: "Minting miner",
          })
        );
        if (metaData.allowListPhase && canMintAllowList) {
          const proof = await getMerkleHexProof(account);
          res = await allowListMint(numberMint, proof);
        } else if (metaData.publicSalePhase) {
          const signature = await getSignaturePublicMint(account);
          console.log(signature);
          res = await publicMint(signature || "");
        }
        await initMetaData();
      }
      const topics: any[] = res?.logs[0]?.topics;
      tokenIdRef.current = topics?.length ? Number(topics?.[topics?.length - 1]).toString() : "";

      dispatch(
        openWeb3Modal({
          type: "TRANSACTION_SUCCESS",
          title: "Mint successful",
          footer: (
            <Flex w={"full"} justify={"center"}>
              <Button onClick={handleViewOnOpenSea}>VIEW ON OPENSEA</Button>
            </Flex>
          ),
        })
      );
    } catch (error: any) {
      dispatch(
        openWeb3Modal({
          type: "TRANSACTION_ERROR",
          title: "WRONG",
          content: capitalizeFirstLetter(error?.["reason"]),
        })
      );
    }
  };

  useEffect(() => {
    if (!isShow) {
      setNumberMint(0);
    }
  }, [isShow]);

  if (!!isShow && type === "MINT_MINER") {
    return (
      <Modal
        title={"How many miners you want to mint?"}
        isOpen={!!isShow && type === "MINT_MINER"}
        onClose={() => dispatch(closeWeb3Modal())}
        showCloseButton={true}
      >
        <Box textAlign={"center"}>1 miner can mine 10 ore per week.</Box>
        <Center w={"full"} textAlign={"center"} mt="40px">
          <Box onClick={() => handleDecrease()}>
            <SelectNumberOreButton type="sub" />
          </Box>
          <Text textStyle={"text-number-4"} color="black" mx={"40px"}>
            {numberMint}
          </Text>
          <Box onClick={() => handleIncrease()}>
            <SelectNumberOreButton type="add" />
          </Box>
        </Center>
        <Center w={"full"} textAlign={"center"} mt="40px">
          <Button disabled={!callable} variant={"type2"} onClick={handleMint}>
            <Text textStyle={"text-body-2"}>Confirm</Text>
          </Button>
        </Center>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Web3MintMiner;
