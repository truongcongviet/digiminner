import { Button, Flex } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openWeb3Modal } from "../redux/slices/web3ModalSlice";
import useContractDigiMinersNFT from "./useContractDigiMinersNFT";

interface IInfoBtn {
  label: string;
  handler: () => void;
}

export default function useHandleMintButton() {
  const dispatch = useDispatch();
  const { callable, getPhasesMintActive, getTotalAllowListMinted, checkPublicMinted } =
    useContractDigiMinersNFT();

  const { account, isActive } = useWeb3React();

  const router = useRouter();
  const [infoBtn, setInfoBtn] = useState<IInfoBtn>();
  const [haveMiner, setHaveMiner] = useState(false);

  const handleClickMint = () => {
    dispatch(
      openWeb3Modal({
        type: "MINT_MINER",
      })
    );
  };

  const handleClickGoCaves = () => {
    if (!haveMiner) {
      //Show popup miner not found
      dispatch(
        openWeb3Modal({
          type: "COMMON",
          title: "No Digi Miners found",
          content: "Grab one here",
          footer: (
            <Flex w={"full"} justify={"center"}>
              <Button
                variant={"type2"}
                onClick={() => {
                  window.open("https://testnets.opensea.io");
                }}
              >
                BUY A MINER
              </Button>
            </Flex>
          ),
        })
      );
      return;
    }

    router.push("/mining");
  };

  useEffect(() => {
    if (account && isActive && callable) {
      (async () => {
        try {
          const [totalAllowListMinted, publicMinted] = await Promise.all([
            getTotalAllowListMinted(account),
            checkPublicMinted(account),
          ]);
          const haveMiner = !!totalAllowListMinted || !!publicMinted;
          debugger;
          setHaveMiner(haveMiner);
        } catch (error) {
          setHaveMiner(false);
        }
      })();
    }
  }, [account, isActive, callable]);

  useEffect(() => {
    if (callable) {
      (async () => {
        const currentPhases = await getPhasesMintActive();
        if (!currentPhases.length) {
          setInfoBtn({
            label: "ENTER THE CAVES",
            handler: handleClickGoCaves,
          });
        } else {
          setInfoBtn({
            label: "MINT A MINER",
            handler: handleClickMint,
          });
        }
      })();
    }
  }, [callable]);

  return { ...infoBtn };
}
