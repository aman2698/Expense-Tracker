
const express = require("express");
const dotenv = require("dotenv");
const color = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const mongo = require("./config/key").MONGO_URI;
const path = require("path");


dotenv.config({ path: "./config/config.env" });
connectDB();
const Transection = require("./routes/transection");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/transactions", Transection);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname,'client','build','index.html'))
  );
}

const PORT = process.env.PORT || 5000;




app.listen(
  PORT,
  console.log(
    `server running  on port ${PORT}`.yellow.bold
  )
);
