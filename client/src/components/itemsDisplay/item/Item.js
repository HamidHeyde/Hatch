import React from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { useTodoList } from "../../../hooks/useTodoList";
import "./Item.scss";
import axios from "axios";

export function Item({ data }) {
  const { text, checked } = data;
  const { todoList, SetTodoList } = useTodoList();

  const handleCheckBoxClick = async (e) => {
    const theItem = todoList.filter((item) => item.text === text)[0];
    const modifiedItem = { ...theItem, checked: !checked };

    const filtered = todoList.filter((item) => item.text !== text);
    const res = [...filtered, { ...modifiedItem }];

    const url = `http://localhost:8000/todos/${modifiedItem._id}`;
    const updateRes = await axios.put(url,{
      data: {...modifiedItem}
    });
    
    if (updateRes.status===200) SetTodoList([...res]);
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
