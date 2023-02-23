import { styled, Button as MuiButton } from "@mui/material";
import React from "react";

export const Button = ({ children, onClick, type, ...props }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)(() => ({
  backgroundColor: "rgba(175, 141, 202, 1)",
  // borderRadius: "20px",
  color: "white",
  width: "100%",
  "&:hover": {
    backgroundColor: "rgba(175, 141, 202, 1)",
  },
}));
