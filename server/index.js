const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const userRoutes = require("./userRoutes");
//dotenv allows to use .env file.
require("dotenv/config");

const app = express();

const PORT = process.env.PORT || 2000;

//middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(userRoutes);
app.use("/images", express.static("images"));

//connect to database
mongoose.connect(process.env.DB_CONNECTION, (err) => {
  if (err) {
    console.log("no connection");
  } else {
    console.log("Connected");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
