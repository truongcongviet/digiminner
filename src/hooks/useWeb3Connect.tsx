import { useMediaQuery } from "@chakra-ui/react";
import { hooks as metaMaskHooks, metaMask } from "@/src/connectors/metaMask";
import { hooks as walletConnectHooks, walletConnect } from "@/src/connectors/walletConnect";
import { useDispatch, useSelector } from "react-redux";
import { closeWeb3Modal, openWeb3Modal } from "../redux/slices/web3ModalSlice";
import { setConnector } from "../redux/slices/web3ConnectSlice";
import { RootState } from "../redux/store";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { storageAutoConnect } from "../commons/constants";

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } =
  metaMaskHooks;

const useWeb3Connect = () => {
  const dispatch = useDispatch();
  const { isActive, chainId } = useWeb3React();
  const { connector } = useSelector((state: RootState) => {
    return state.web3Connector;
  });

  useEffect(() => {
    // show modal switch network
    if (isActive && chainId != process.env.NEXT_PUBLIC_CHAIN_ID) {
      setTimeout(
        () =>
          dispatch(
            openWeb3Modal({
              type: "WRONG_NETWORK",
            })
          ),
        500
      );
    }
  }, [isActive, chainId]);

  useEffect(() => {
    const autoConnectEncode = localStorage.getItem(storageAutoConnect);
    const autoConnectDecode = autoConnectEncode != null ? JSON.parse(autoConnectEncode) : {};
    if (autoConnectDecode?.status && autoConnectDecode?.provider !== null) {
      switch (autoConnectDecode?.provider) {
        case "metaMask": {
          connectMetamask();
          break;
        }
        case "walletConnect": {
          connectWalletConnect();
          break;
        }
      }
    }
  }, []);

  const connectMetamask = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      metaMask
        .activate()
        .then(() => {
          dispatch(
            setConnector({
              connector: "metaMask",
            })
          );
          localStorage.setItem(
            storageAutoConnect,
            JSON.stringify({ status: true, provider: "metaMask" })
          );
          dispatch(closeWeb3Modal());
        })
        .catch((error) => console.error(error));
    } else {
      // if the provider is not detected, detectEthereumProvider resolves to null
      console.error("Please install MetaMask!");
      dispatch(
        openWeb3Modal({
          type: "INSTALL_METAMASK",
        })
      );
    }
  };

  const connectWalletConnect = () => {
    walletConnect
      .activate()
      .then(() => {
        dispatch(
          setConnector({
            connector: "walletConnect",
          })
        );
        localStorage.setItem(
          storageAutoConnect,
          JSON.stringify({ status: true, provider: "walletConnect" })
        );
        dispatch(closeWeb3Modal());
      })
      .catch((error) => console.log(error));
  };

  const disconnect = () => {
    switch (connector) {
      case "metaMask": {
        if (metaMask?.deactivate) {
          void metaMask.deactivate();
        } else {
          void metaMask.resetState();
        }
        break;
      }
      case "walletConnect": {
        if (walletConnect?.deactivate) {
          void walletConnect.deactivate();
        } else {
          void walletConnect.resetState();
        }
        break;
      }
    }
  };

  const switchNetWork = (chainId: number | string | undefined) => {
    const chainIdSwitch = typeof chainId === "string" ? parseInt(chainId) : chainId;
    switch (connector) {
      case "metaMask": {
        metaMask
          .activate(chainIdSwitch)
          .then(() => dispatch(closeWeb3Modal()))
          .catch((error: any) => console.error(error));
        break;
      }
      case "walletConnect": {
        walletConnect
          .activate(chainIdSwitch)
          .then(() => dispatch(closeWeb3Modal()))
          .catch((error: any) => console.error(error));
        break;
      }
    }
  };

  return {
    connectMetamask,
    connectWalletConnect,
    disconnect,
    switchNetWork,
  };
};

export default useWeb3Connect;
