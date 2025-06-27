require("dotenv").config(); // loads .env variables into process.env
const express = require("express");
const connectDB = require("./connect");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from NexPay backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
