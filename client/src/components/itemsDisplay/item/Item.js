import React from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { useTodoList } from "../../../hooks/useTodoList";
import "./Item.scss";

export function Item({ data }) {
  const { text, checked } = data;
  const { todoList, SetTodoList } = useTodoList();
  // const {todoList, SetTodoList} = useContext(TodoListContext);

  const handleCheckBoxClick = (e) => {
    const theItem = todoList.filter((item) => item.text === text)[0];
    const modifiedItem = { ...theItem, checked: !checked };

    const filtered = todoList.filter((item) => item.text !== text);
    const res = [...filtered, { ...modifiedItem }];

    SetTodoList([...res]);
  };
  return (
    <Card className="listItem" onClick={handleCheckBoxClick}>
      <Checkbox
        color={checked ? "success" : "primary"}
        checked={checked ? true : false}
        onClick={handleCheckBoxClick}
      />
      {text}
    </Card>
  );
}
