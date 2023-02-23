import React from "react";

import { MailIcon } from "../../assets/icons/index";

import { Button } from "../UI/button-v1";
import { Input } from "../UI/input-v1/index";

import { InputLabel, styled } from "@mui/material";

import { SelectLabels } from "../UI/select/Select";

import CheckBox from "../UI/checkbox/CheckBox";
import RadioButton from "../UI/radio-button/RadionButton";

import { StyledDiv, StyledRadioGroup, StyledTextAria } from "./FormStandart";
import { useForm } from "react-hook-form";

export const FormOutlined = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      select: "",
      checkbox: "",
      textarea: "",
      radio: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type='text'
        variant='outlined'
        label='Input Field'
        placeholder='Your Name'
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <StyledInput
        type='email'
        iconVariant='end'
        variant='outlined'
        label='Input Field'
        placeholder='Email'
        icon={<MailIcon />}
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}
      <StyledSelect />
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

      <StyledButton
        type='submit'
        variant='contained'
      >
        Submit
      </StyledButton>
    </form>
  );
};

const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
}));

const StyledInput = styled(Input)(() => ({
  border: "none",
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
    {
      border: "2px solid red",
      borderRadius: "0",
    },
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ":
    {
      borderRadius: "0",
    },
}));

const StyledSelect = styled(SelectLabels)(() => ({
  borderBottom: "none",
}));
