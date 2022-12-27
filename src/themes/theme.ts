import { extendTheme } from "@chakra-ui/react";
import { themeInput } from "./themeInput";
import { themeButton } from "./themeButton";

const theme = extendTheme({
  //test
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  //
  styles: {
    global: {
      body: {
        // bg:  "neutral.grayDark",
        backgroundAttachment: "fixed",
        bgSize: "100% 100%",
        fontFamily: "Quantico",
      },
      "*": {
        color: "black",
      },
      "*, *::before, ::after": {
        border: "none",
      },
      ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
        boxShadow: "none !important",
        outline: "0",
      },
    },
  },

  textStyles: {
    "text-number-4": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "28px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
    },

    "text-title-1": {
      fontWeight: 700,
      lineHeight: 1.4,
      fontSize: "15px",
      fontFamily: "Quantico",
    },
    "text-title-2": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "40px",
      fontFamily: "PressStart2P",
      textShadow: "0px 5px 0px #000000",
      letterSpacing: "-0.09em",
    },
    "text-title-3": {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: "18px",
      fontFamily: "Quantico",
    },
    "text-title-4": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "30px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
    },
    "text-title-5": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "24px",
      fontFamily: "PressStart2P",
      textShadow: "0px 4px 0px #000000",
      letterSpacing: "-0.09em",
    },
    "text-title-6": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "18px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
    },
    "text-title-7": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "44px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
      textShadow: "0px 4px 0px #000000",
    },
    "text-title-8": {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "24px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
    },
    "text-title-10": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "32px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
    },
    "text-title-11": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "16px",
      fontFamily: "PressStart2P",
      letterSpacing: "-0.09em",
    },
    "text-title-9": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "14px",
      fontFamily: "PressStart2P",
    },
    "text-body-1": {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "18px",
      fontFamily: "Quantico",
    },
    "text-body-1-1": {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "17px",
      fontFamily: "Quantico",
    },
    "text-body-2": {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "16px",
      fontFamily: "Quantico",
    },
    "text-body-3": {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "15px",
      fontFamily: "Quantico",
    },
    "text-body-4": {
      fontWeight: 700,
      lineHeight: 1.3,
      fontSize: "14px",
      fontFamily: "Quantico",
    },
    "text-body-5": {
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: "14px",
      fontFamily: "Quantico",
    },
    "text-btn": {
      lineHeight: 1.4,
      fontSize: "16px",
      fontFamily: "Quantico",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      fontWeight: 700,
    },
  },

  colors: {
    black: "#000000",
    white: "#FFFFFF",
    green: "#D2FA75",
    violet: {
      dark: "#17091E",
    },
    gray: "#EEEEEE",
  },
  components: {
    Input: themeInput,
    Button: themeButton,
  },
});

export default theme;
