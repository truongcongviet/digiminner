import { Box, Button, ChakraProvider, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import "../../public/fonts/font.css";
import store from "../redux/store";
import theme from "../themes/theme";

import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Fragment, useEffect } from "react";
import { AppPropsWithLayout } from "../commons/types";
import MultipleLangWrapper from "../components/base/MultipleLangWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Web3ReactProvider } from "@web3-react/core";
import { hooks as metaMaskHooks, metaMask } from "@/src/connectors/metaMask";
import { hooks as walletConnectHooks, walletConnect } from "@/src/connectors/walletConnect";
import Web3ModalProvider from "../containers/web3/Web3ModalProvider";

const languages = {
  vi: require("../../public/locales/vi/lang.json"),
  en: require("../../public/locales/en/lang.json"),
} as any;

// const connectors: [MetaMask | WalletConnect][] = [
const connectors: any[] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const { locale = "en", defaultLocale = "en" } = router;
  const messages = languages[locale];

  const Layout = Component.Layout ?? Fragment;

  gsap.registerPlugin(ScrollTrigger);

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <MultipleLangWrapper>
            <Web3ReactProvider connectors={connectors}>
              <Head>
                <title>Digi miners</title>

                <link rel="shortcut icon" href="/assets/favicon.png" />
              </Head>
              <NextNProgress
                color={"#F1AE71"}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <Layout>
                <Component {...pageProps} />
                <Web3ModalProvider />
              </Layout>
            </Web3ReactProvider>
          </MultipleLangWrapper>
        </ChakraProvider>
      </Provider>
    </IntlProvider>
  );
}

export default MyApp;
