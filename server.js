// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const express = require("express");
import express from "express";
const app = express();
import read from "./routes/read.js";
import post from "./routes/post.js";
import put from "./routes/put.js";
import dele from "./routes/delete.js";
import cors from "cors";
import path from "path";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// const cors = require("cors");
// const path = require("path");
// const read = require("./routes/read.js");
// import read from "./routes/read.js"
// const fruits = require("./routes/fruits");
// const __dirname = path.resolve(path.dirname(""));
// const staticFolder = path.join(__dirname, "public");

//logger-funktion
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// app.use(express.static(staticFolder));
app.use("/hamsters", read, post, put, dele);
/* app.use("/hamsters", post)
app.use('/hamsters', put) */
// app.use("/fruits", fruits);

const port = 1234;
app.listen(port, () => {
  console.log(port);
});
