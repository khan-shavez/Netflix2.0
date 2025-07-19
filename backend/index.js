// step1: create a server

import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();
dotenv.config({
  path: ".env",
});

const app = express();
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello i am coming fromm backend",
//     success: true,
//   });
// });

// api key
app.use("/api/v1/user", userRoute);
// http://localhost:8080/api/v1/user/register

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});
