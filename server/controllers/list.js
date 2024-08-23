import todosList from "../models/list.js";
import mongoose from "mongoose";

export const getLists = async (req, res) => {
  const { creator } = req.query;
  try {
    const todos = await todosList.find({ creator });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addList = async (req, res) => {
  const todo = new todosList({
    creator: req.body.creator,
    title: req.body.title,
    desc: req.body.desc,
    active: req.body.active,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteList = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No list with that id");

  await todosList.findByIdAndDelete(_id);

  res.json({ message: "List Deleted Successfully" });
};

export const updateList = async (req, res) => {
  const { id: _id } = req.params;
  const todoList = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No list with that id");

  const updatedTodoList = await todosList.findByIdAndUpdate(_id, todoList, {
    new: true,
  });

  res.json(updatedTodoList);
};
