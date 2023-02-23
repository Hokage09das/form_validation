import React, { useState } from "react";

import { Button } from "../UI/button-v1";
import { StyledInput } from "../DragAndDrop/DragAndDrop";

import "../../App.css";

export const CreateInput = ({
  onDrop,
  setOnDrop,
  register,
  toggle,
  setInputState,
  inputState,
  setIsOpenForm,
}) => {
  const [inputValue, setInputValue] = useState({
    label: "",
    placeholder: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),

      item: (
        <StyledInput
          type='text'
          required={true}
          variant='outlined'
          name={inputValue.label}
          label={inputValue.label}
          placeholder={inputValue.placeholder}
          {...register(inputValue.placeholder)}
        />
      ),
    };

    setInputState({
      ...inputState,
      [inputValue.placeholder]: "",
    });

    setOnDrop([...onDrop, newItem]);

    setInputValue({ label: "", placeholder: "" });
    toggle();
  };

  const handleChange = (e) => {
    return setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        name='label'
        required={true}
        label='for label'
        value={inputValue.label}
        onChange={handleChange}
      />
      <StyledInput
        type='text'
        required={true}
        name='placeholder'
        label='for placeholder'
        onChange={handleChange}
        value={inputValue.placeholder}
      />
      <Button type='submit'>ok</Button>
    </form>
  );
};
