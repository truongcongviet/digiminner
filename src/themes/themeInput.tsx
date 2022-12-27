import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { PartsStyleFunction, PartsStyleObject, SystemStyleObject } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    color: "neutral.grayLightest",
    rounded: "4px",
    _placeholder: {
      color: "neutral.grayLight",
    },
  },
};

const variantDefault: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;

  return {
    field: {
      border: "1px solid",
      borderColor: "neutral.grayNormal",
      bg: "neutral.grayDark",
      _hover: {
        borderColor: "primary.brownLight",
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _invalid: {
        borderColor: "neutral.danger",
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: "primary.brownLight",
      },
    },
    addon: {
      border: "1px solid",
      borderColor: "transparent",
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {
  md: {
    field: {
      px: 4,
      py: 2,
      minH: { base: "40px", md: "46px" },
      borderRadius: "4px",
      fontSize: "sm",
    },
  },
  lg: {
    field: {
      px: 4,
      py: "14px",
      minH: 14,
      borderRadius: "4px",
      fontSize: "xl",
      fontWeight: "semibold",
    },
  },
};

const defaultProps = {
  size: "md",
  variant: "default",
};

const variants = {
  default: variantDefault,
};

export const themeInput = {
  baseStyle,
  variants,
  defaultProps,
  sizes,
};
