import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Its working fine!" });
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
