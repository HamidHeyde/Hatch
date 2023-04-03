import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddItemBar.scss";
import { useTodoList } from "../../hooks/useTodoList";

export function AddItemBar() {
  const [itemToAdd, SetItemToAdd] = useState("");
  const { SetTodoList } = useTodoList();

  const handleOnChange = (e) => SetItemToAdd(e.target.value);
  const handleKeyDown = (e) => e.key === "Enter" && handleAddItem();
  const handleAddItem = () => {
    const newItem = { text: itemToAdd, done: false };

    SetTodoList((prev) => [...prev, { ...newItem }]);
    SetItemToAdd("");
  };

  return (
    <div className="addItemBarWrapper">
      <TextField
        className="addInput"
        label="Add your Item"
        variant="outlined"
        value={itemToAdd}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        focused
      />
      <Button className="addButton" variant="contained" onClick={handleAddItem}>
        Add Item
      </Button>
    </div>
  );
}
