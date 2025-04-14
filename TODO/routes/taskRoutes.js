import express from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", authMiddleware, createTask);
router.put("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);

export default router;
