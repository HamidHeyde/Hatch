import { useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";

export const useTodoList = () => useContext(TodoListContext);
