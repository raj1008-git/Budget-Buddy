require("dotenv").config();
const express = require("express");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Expense Tracker API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
