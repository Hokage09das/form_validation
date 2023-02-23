import React, { forwardRef } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  styled,
} from "@mui/material";

const CheckBox = forwardRef(({ checked, onChange, label, ...props }, ref) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          ref={ref}
          checked={checked}
          onChange={onChange}
          {...props}
        />
      }
      label={label}
    />
  );
});

const StyledCheckbox = styled(MuiCheckbox)(() => ({
  fontSize: "12px",
  "& .MuiSvgIcon-root ": {
    width: "30px",
    height: "30px",
    color: " rgba(175, 141, 202, 1)",
  },
}));

export default CheckBox;
