const todo = require("../model/todo.js");

const ping = async (request, response) => {
  return response.status(200).json({ message: "app is up" });
};

const addTodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      ...request.body.data,
      createdAt: Date.now(),
    });

    const newItemRes = await newTodo.save();

    return response.status(200).json(newItemRes);
  } catch (error) {
    const errorMessage = error.message;
    return response.status(500).json(errorMessage);
  }
};

const getAllTodos = async (request, response) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const updateTodo = async (request, response) => {
  try {
    await todo.findOneAndUpdate(
      { _id: request.params.id },
      { ...request.body.data }
    );

    const todoItem = await todo.findById(request.params.id);

    return response.status(200).json(todoItem);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const deleteTodo = async (request, response) => {
  try {
    const todoRes = await todo.deleteMany({});

    return response.status(200).json(todoRes);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = {
  ping,
  addTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
};
