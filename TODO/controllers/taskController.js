import tasks from "../models/taskModel.js";
import generateId from "../../utils/generateId.js";
import { AppError } from "../../utils/AppError.js";

export const createTask = (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return next(new AppError("Title and Description are required", 400));
  }

  const newTask = {
    id: generateId(),
    title,
    description
  };
  tasks.push(newTask);
  res.status(201).json({
    success: true,
    message: "Task Created Successfully",
    data: newTask
  });
};

export const getAllTasks = (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    message: "Fetched all Todos",
    data: tasks
  });
};

export const getTaskById = (req, res, next) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return next(new AppError("Task not found", 404));

  res.status(200).json({
    success: true,
    message: "Task Fetached by ID",
    data: task
  });
};

export const updateTask = (req, res, next) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return next(new AppError("Task not found", 404));

  const { title, description } = req.body;
  if (!title || !description) {
    return next(new AppError("Title and Description are required", 400));
  }

  task.title = title;
  task.description = description;

  res.status(200).json({
    success: true,
    message: "Updated the Task Successfully",
    data: task
  });
};

export const deleteTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) return next(new AppError("Task not found", 404));

  tasks.splice(index, 1);
  res.status(200).json({
    success: true,
    message: "Task deleted successfully"
  });
};
