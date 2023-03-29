import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
// import routes from "./routes/index";

const app: Application = express();

dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//importing routes
import blogRoute from "./routes/blogRoute";

//Declare the route paths
app.use("/api/blogs", blogRoute);

export { app };
