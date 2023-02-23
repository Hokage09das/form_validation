import { MailIcon } from "../../assets/icons/index";

import { Button } from "../UI/button-v1";
import { Input } from "../UI/input-v1/index";

import { InputLabel, styled } from "@mui/material";

import CheckBox from "../UI/checkbox/CheckBox";
import RadioButton from "../UI/radio-button/RadionButton";

import {
  CreateInput,
  StyledDiv,
  StyledRadioGroup,
  StyledTextAria,
} from "../form/index";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./drag.css";

import { SelectLabels } from "../UI/select/Select";

export const DragAndDrop = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    radio: "",
    select: "",
    checkbox: {
      Label1: "",
      Label2: "",
      Label3: "",
    },
    textarea: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: inputState,
  });

  const onSubmit = (data) => {
    console.log(errors, "from submit");
    let result = null;
    if (data !== null || undefined) {
      result = { ...data, select: inputState.select };
    }
    console.log(result, "result");
  };

  const [onDrop, setOnDrop] = useState([
    {
      id: 1,
      item: (
        <>
          <StyledInput
            type='text'
            variant='outlined'
            label='Input Field'
            required
            placeholder={errors?.name?.message || "Your Name"}
            error={!!errors?.name?.message}
            {...register("name", {
              minLength: { value: 2, message: "error message" },
              required: { value: true, message: "required" },
            })}
          />
          <p>{errors?.name?.message}</p>
        </>
      ),
    },
    {
      id: 2,
      item: (
        <StyledInput
          type='email'
          required
          error={errors?.email}
          iconVariant='end'
          variant='outlined'
          label='Input Field'
          placeholder='Email'
          icon={<MailIcon />}
          {...register("email", {
            required: { value: true, message: "required" },
          })}
        />
      ),
    },
    {
      id: 3,
      item: (
        <StyledSelect
          inputState={inputState}
          setInputState={setInputState}
        />
      ),
    },
    {
      id: 4,
      item: (
        <div>
          <InputLabel>Checkbox field</InputLabel>
          <StyledDiv>
            <CheckBox
              label='Label 1'
              {...register("checkbox.value1")}
            />

            <CheckBox
              label='Label 2'
              {...register("checkbox.value2")}
            />
            <CheckBox
              label='Label 3'
              {...register("checkbox.value3")}
            />
          </StyledDiv>
        </div>
      ),
    },
    {
      id: 5,
      item: (
        <>
          <InputLabel>Text Area</InputLabel>
          <StyledTextAria
            minRows={4}
            {...register("textarea", {
              required: { value: true, message: "required" },
              maxLength: { value: 200, message: "less then 2000 symbol" },
            })}
          />
        </>
      ),
    },
    {
      id: 6,
      item: (
        <div>
          <InputLabel>Radio fields</InputLabel>
          <StyledRadioGroup sx={{ display: "flex", flexDirection: "row" }}>
            <RadioButton
              name='radio'
              value='Label 1'
              label='Label 1'
              {...register("radio", {
                required: { value: true, message: "choose one" },
              })}
            />
            <RadioButton
              name='radio'
              value='Label 2'
              label='Label 2'
              {...register("radio", { required: true })}
            />
            <RadioButton
              name='radio'
              value='Label 3'
              label='Label 3'
              {...register("radio", { required: true })}
            />
          </StyledRadioGroup>
        </div>
      ),
    },
  ]);

  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(onDrop);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setOnDrop(items);
  };

  const toggleForm = () => {
    setIsOpenForm((prev) => !prev);
  };
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='inputs'>
          {(provided) => (
            <form
              ref={provided.innerRef}
              {...provided.droppableProps}
              onSubmit={handleSubmit(onSubmit)}
            >
              {onDrop.map((item, index) => (
                <Draggable
                  key={item.id}
                  index={index}
                  draggableId={item.id.toString()}
                >
                  {(provided) => (
                    <li
                      className='li'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.item}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <StyledButton
                type='submit'
                variant='contained'
              >
                Submit
              </StyledButton>
            </form>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        {isOpenForm && (
          <CreateInput
            onDrop={onDrop}
            register={register}
            toggle={toggleForm}
            setOnDrop={setOnDrop}
            inputState={inputState}
            setInputState={setInputState}
            setIsOpenForm={setIsOpenForm}
          />
        )}
        {isOpenForm || <Button onClick={toggleForm}>Create Input</Button>}
      </div>
    </>
  );
};

const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
}));

export const StyledInput = styled(Input)(() => ({
  border: "none",
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
    {
      border: "1px solid rgba(175, 141, 202, 1)",
      borderRadius: "0",
    },
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ":
    {
      borderRadius: "0",
    },

  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "rgba(175, 141, 202, 1)",
    },
  },
}));

const StyledSelect = styled(SelectLabels)(() => ({
  borderBottom: "none",
}));
