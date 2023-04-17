import { app } from "./app";
import mongoose from "mongoose";

const port: string | undefined = process.env.PORT;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to MongoDB ✅");
    //start the server
    app.listen(port, () => console.log("Server running on port", port));
  } catch (error) {
    console.log("Failed to Connect to the DB ❌");
    console.log(error);
  }
};

startServer();
