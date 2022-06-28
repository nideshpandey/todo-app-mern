require("dotenv").config();

const express = require("express");
const todoRoutes = require("./routes/todos");

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

//LISTENING TO PORT
app.listen(process.env.PORT, () => {
  console.log("Listening to port:", process.env.PORT);
});
