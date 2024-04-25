import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps, TextField } from "@mui/material";
type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
};
const InputField = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,

  required,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          variant="outlined"
          label={label}
          type={type}
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          placeholder={label}
          required={required}
          // error={!!error?.message}
          //     helperText={error?.message}
        />
      )}
    />
  );
};

export default InputField;
