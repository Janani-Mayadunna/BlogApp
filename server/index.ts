import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import routes from "./routes/index";

const app: Application = express();

//Middlewares
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(morgan("dev"));

dotenv.config();

const url = process.env.MONGODB_URL;

//server listening
mongoose
  .connect(url!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  // If the connection is successful, it starts an HTTP server using the Express library on the port specified in the process.env.PORT environment variable
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

//Routes
app.use("/auth", routes.authRoutes);
