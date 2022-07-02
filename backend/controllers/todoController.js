const { default: mongoose } = require("mongoose");
const Todo = require("../models/todoModel");

// GET all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });

  res.status(200).json(todos);
};

// GET single todo
const getSingleTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Something went wrong." });
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "No such todo." });
  }

  res.status(200).json(todo);
};

// POST todos
const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await Todo.create({ title, description });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// DELETE todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Something went wrong." });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({ error: "No such todo." });
  }

  res.status(200).json(todo);
};

// UPDATE todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Something went wrong." });
  }

  const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });

  res.status(200).json(todo);
};

module.exports = { getTodos, getSingleTodo, createTodo, deleteTodo, updateTodo };
