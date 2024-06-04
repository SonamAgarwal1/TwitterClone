import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse req body

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
  connectMongoDB();
});
