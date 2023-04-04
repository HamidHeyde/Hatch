const express = require("express");
const route = new express.Router();
const {
  ping,
  addTodo,
  getAllTodos,
  updateTodo,
  deleteTodo
} = require("../controller/todoController.js");

route.get("/ping", ping);
route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.put('/todos/:id', updateTodo);
route.delete('/todos', deleteTodo);

module.exports = route;
