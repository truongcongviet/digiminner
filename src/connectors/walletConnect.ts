import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import { URLS } from "@/src/utils/chains";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: URLS,
      },
    })
);
