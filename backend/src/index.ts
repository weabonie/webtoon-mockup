import { Request, Response } from "express";
import { showHome } from "./routes/home";
import cors from "cors";
import { showImage } from "./routes/image";

// src/index.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: ['http://localhost:8081'],  // Allow localhost and device IP
  methods: ['GET', 'POST'],  // Specify allowed methods
  credentials: true,  // If needed for cookies or authentication
}));
app.get('/manga/home', showHome)
app.get('/manga/image', showImage)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});