// server.js - Express Server for Cyber AI Academy
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve everything from project root

// Default route for index.html
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Serve files from the "src" folder correctly
app.use("/src", express.static(path.join(__dirname, "src")));

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
