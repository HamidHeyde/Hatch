import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// Todo List Context
export const TodoListContext = createContext([]);

// Todo List Provider
export const TodoListProvider = ({ children }) => {
  const [todoList, SetTodoList] = useState([]);
  const [searchRes, SetSearchRes] = useState([]);

  useEffect(() => {
    SetSearchRes([...todoList]);
  }, [todoList]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:8000/todos');
      return data;
    }

    fetchData()
      .then((res)=> SetTodoList([...res.data]))
      .catch((err)=> console.log(err.message))

  }, []);

  return (
    <TodoListContext.Provider
      value={{ todoList, SetTodoList, searchRes, SetSearchRes }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
