import type { SystemStyleFunction, SystemStyleObject } from "@chakra-ui/styled-system";
import bgBtnType1 from "/public/assets/images/buttons/bg-btn-01.png";
import bgBtnType2 from "/public/assets/images/buttons/bg-btn-02.png";

const baseStyle: SystemStyleObject = {
  lineHeight: "1.5",
  borderRadius: "4px",
  transitionProperty: "common",
  transitionDuration: "normal",
  textTransform: "uppercase",
  maxW: "full",
  color: "black",
  noOfLines: 1,
  _focusVisible: {
    boxShadow: "none",
    border: "1px solid",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

const variantType1: SystemStyleFunction = (props) => {
  return {
    backgroundImage: `url(${bgBtnType1.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "round",
  };
};

const variantType2: SystemStyleFunction = (props) => {
  return {
    backgroundImage: `url(${bgBtnType2.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "round",
  };
};

const variantType3: SystemStyleFunction = (props) => {
  return {
    backgroundImage: `url(${bgBtnType1.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "round",
  };
};

const variantUnstyled: SystemStyleObject = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0,
};

const variantBlack: SystemStyleObject = {
  bg: "rgba(21, 21, 21, 0.4)",
  _focusVisible: {
    border: "none",
  },
};

const variants = {
  type1: variantType1,
  type2: variantType2,
  unstyled: variantUnstyled,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    minH: 12,
    minW: "233px",
    fontSize: "lg",
    px: 6,
  },
  md: {
    minH: "64px",
    minW: "233px",
    fontSize: "md",
    px: 10,
  },
  fullW: {
    minH: "64px",
    minW: "233px",
    fontSize: "md",
    px: 4,
    w: "full",
  },
  unset: {
    fontSize: "md",
    px: 4,
  },
};

const defaultProps = {
  variant: "type1",
  size: "md",
  textStyle: "paragraph-primary",
};

export const themeButton = {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
