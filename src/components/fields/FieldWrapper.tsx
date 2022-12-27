import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface FieldWrapperProps {
  children: ReactNode;
  helperText?: string;
  errorText?: string;
  label?: string;
}

const FieldWrapper = ({ children, errorText, helperText, label }: FieldWrapperProps) => {
  return (
    <FormControl isInvalid={!!errorText}>
      {label && (
        <FormLabel mb={1} textStyle={"paragraph-subheading"} color={"neutral.grayLighter"}>
          {label}
        </FormLabel>
      )}
      {children}
      {helperText && (
        <FormHelperText mt={1} textStyle={"paragraph-primary"} color={"neutral.grayLight"}>
          {helperText}
        </FormHelperText>
      )}
      {errorText && (
        <FormErrorMessage mt={1} textStyle={"paragraph-primary"} color={"neutral.danger"}>
          {errorText}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FieldWrapper;
