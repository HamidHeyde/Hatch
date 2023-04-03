import React, { useContext } from "react";
import Button from "@mui/material/Button";
import "./DeleteBar.scss";
import { TodoListContext } from "../../context/TodoListContext";

export function DeleteBar() {
  const { SetTodoList } = useContext(TodoListContext);

  const handleDelete = () => {
    SetTodoList([]);
  };
  return (
    <div className="deleteBarWrapper">
      <Button
        className="deleteButton"
        variant="contained"
        onClick={handleDelete}
      >
        Delete All Items
      </Button>
    </div>
  );
}
