import React, { forwardRef } from "react";

import styled from "@emotion/styled";
import { FormControlLabel, Radio } from "@mui/material";

const RadioButton = forwardRef(
  ({ checked, onChange, name, label, htmlFor, ...props }, ref) => {
    return (
      <FormControlLabel
        control={
          <StyledRadio
            name={name}
            checked={checked}
            ref={ref}
            onChange={onChange}
            {...props}
          />
        }
        label={label}
        htmlFor={htmlFor}
      />
    );
  },
);

const StyledRadio = styled(Radio)(() => ({
  width: "20.8px",
  height: "20.8px",
  marginRight: "10px",
}));

export default RadioButton;
