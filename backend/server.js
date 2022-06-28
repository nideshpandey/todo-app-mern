require("dotenv").config();

const express = require("express");
const todoRoutes = require("./routes/todos");
const mongoose = require("mongoose");

//Express app
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use(todoRoutes);

//Connect to a database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //LISTENING TO PORT
    app.listen(process.env.PORT, () => {
      console.log("Connected to database, Listening to port:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
