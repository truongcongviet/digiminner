import { Input, InputProps } from "@chakra-ui/react";
import { forwardRef, LegacyRef } from "react";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";

interface InputFieldProps
  extends Omit<InputProps, "children">,
    Omit<FieldWrapperProps, "children"> {
  onChange: InputProps["onChange"];
}

const InputField = forwardRef(
  (
    { helperText, errorText, label, ...inputProps }: InputFieldProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <FieldWrapper helperText={helperText} errorText={errorText} label={label}>
        <Input {...inputProps} ref={ref} />
      </FieldWrapper>
    );
  }
);

export default InputField;
