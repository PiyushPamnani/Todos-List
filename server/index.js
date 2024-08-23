import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import listRouter from "./routers/list.js";
import userRoute from "./routers/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use("/lists", listRouter);
app.use("/users", userRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server running successfully on port: http://localhost:${PORT}`
      )
    )
  )
  .catch((error) => console.log(error.message));
