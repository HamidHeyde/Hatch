import { createContext, useState, useEffect } from "react";

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
    const data = [
      { text: "This is the 1st todo list", checked: false },
      { text: "This is the 2nd todo list", checked: true },
      { text: "This is the 3rd todo list", checked: false },
      { text: "This is the 4tg todo list", checked: true },
      { text: "This is the 5th todo list", checked: false },
      { text: "This is the 6th todo list", checked: true },
      { text: "This is the 7th todo list", checked: true },
    ];

    SetTodoList([...data]);
    SetSearchRes([...data]);
  }, []);

  return (
    <TodoListContext.Provider
      value={{ todoList, SetTodoList, searchRes, SetSearchRes }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
