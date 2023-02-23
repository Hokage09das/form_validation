import * as React from "react";

import { MenuItem, Select, styled } from "@mui/material";

export const SelectLabels = ({
  variant,
  inputState,
  setInputState,
  register,
  ...props
}) => {
  const [age, setAge] = React.useState(inputState.select);

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  React.useEffect(() => {
    setInputState({ ...inputState, select: age });
  }, [setInputState, inputState, age]);
  return (
    <StyledSelect
      value={age}
      displayEmpty
      // label='hello'
      variant={variant}
      onChange={handleChangeAge}
      MenuProps={{ disablePortal: true }}
      inputProps={{ "aria-label": "Without label" }}
      {...props}
    >
      <MenuItem value=''>
        <p>Select</p>
      </MenuItem>
      <MenuItem value='Ten'>Ten</MenuItem>
      <MenuItem value='Twenty'>Twenty</MenuItem>
      <MenuItem value='Thirty'>Thirty</MenuItem>
    </StyledSelect>
  );
};

const StyledSelect = styled(Select)(() => ({
  width: "100%",
  borderBottom: "1px solid rgba(175, 141, 202, 1)",
  "&:hover": {
    "&& fieldset": {
      border: "1px solid rgba(175, 141, 202, 1)",
    },
  },
  "&:active": {
    "&& fieldset": {
      border: "1px solid rgba(175, 141, 202, 1)",
    },
  },
  "&.MuiInputBase-root:after": {
    borderBottom: "2px solid rgba(175, 141, 202, 1)",
  },
}));
