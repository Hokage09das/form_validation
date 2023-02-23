import React, { forwardRef, useCallback } from "react";

import { InputAdornment, InputLabel, styled, TextField } from "@mui/material";

export const Input = forwardRef(
  (
    {
      id,
      type,
      icon,
      name,
      error,
      label,
      value,
      variant,
      onClick,
      required,
      InputProps,
      iconVariant = "end",
      placeholder,
      ...props
    },
    ref,
  ) => {
    const iconChangeHandlerVariant = useCallback(() => {
      const positionAdornment =
        iconVariant === "start" ? "startAdornment" : "endAdornment";

      return {
        [positionAdornment]: (
          <InputAdornment position={iconVariant}>{icon || null}</InputAdornment>
        ),
      };
    }, [iconVariant, icon]);
    return (
      <div>
        <InputLabel>{label}</InputLabel>
        <StyledTextField
          id={id}
          name={name}
          error={error}
          ref={ref}
          type={type}
          value={value}
          autoComplete='off'
          variant={variant}
          onClick={onClick}
          required={required}
          placeholder={placeholder}
          InputProps={{
            ...InputProps,
            ...iconChangeHandlerVariant(),
          }}
          {...props}
        />
      </div>
    );
  },
);

const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  borderBottom: "1px solid rgba(175, 141, 202, 1)",

  "& .MuiInput-root": {
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid rgba(175, 141, 202, 1)",
    },
  },
  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
    borderBottom: "2px solid rgba(175, 141, 202, 1)",
  },

  "& .input": {
    border: "1px solid #AFAFAF",
    borderRadius: "8px",
    background: "#FFFFFF",
    color: "black",
    padding: "0px 4px 0px 8px",
    width: "100%",
  },

  "&.input.Mui-error": {
    border: "1px solid red",
  },
}));
