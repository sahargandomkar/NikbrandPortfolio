import express from "express";
import data from "./data.js";
//const express = require("express");
const app = express();

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(` Server at http://localhost:${port}`));
