import React from "react";

import { MailIcon } from "../../assets/icons/index";

import { Button } from "../UI/button-v1";
import { Input } from "../UI/input-v1/index";

import {
  styled,
  InputLabel,
  RadioGroup,
  TextareaAutosize,
} from "@mui/material";

import { SelectLabels } from "../UI/select/Select";

import CheckBox from "../UI/checkbox/CheckBox";
import RadioButton from "../UI/radio-button/RadionButton";

import "../../App.css";

export const FormStandart = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        variant='standard'
        label='Input Field'
        placeholder='Your Name'
      />
      <Input
        variant='standard'
        label='Input Field'
        iconVariant='end'
        placeholder='Email'
        icon={<MailIcon />}
      />
      <SelectLabels />
      <div>
        <InputLabel>Checkbox field</InputLabel>
        <StyledDiv>
          <CheckBox label='Label 1' />
          <CheckBox label='Label 2' />
          <CheckBox label='Label 3' />
        </StyledDiv>
      </div>
      <InputLabel>Text Area</InputLabel>
      <StyledTextAria minRows={4} />

      <div>
        <InputLabel>Radio fields</InputLabel>
        <StyledRadioGroup sx={{ display: "flex", flexDirection: "row" }}>
          <RadioButton
            name='radio'
            label='Label 1'
            value='dastan'
          />
          <RadioButton
            name='radio'
            label='Label 2'
            value='argen'
          />
          <RadioButton
            name='radio'
            label='Label 3'
            value='aruuke'
          />
        </StyledRadioGroup>
      </div>

      <Button
        type='submit'
        variant='contained'
      >
        Submit
      </Button>
    </form>
  );
};

export const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const StyledRadioGroup = styled(RadioGroup)(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px",
}));

export const StyledTextAria = styled(TextareaAutosize)(() => ({
  border: "none",
  width: "100%",
  resize: "none",

  fontSize: "18px",
  borderBottom: "1px solid  rgba(175, 141, 202, 1)",
  "&:focus": {
    outline: "none",
    borderBottom: "2px solid  rgba(175, 141, 202, 1)",
  },
}));
