import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import taskRoutes from "./TODO/routes/taskRoutes.js";
import errorHandler from "./TODO/middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/todo", taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
