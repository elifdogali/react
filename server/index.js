const express = require("express");
const app = express();

//This code block is route handler
app.get("/", (req, res) => {
  res.send({ hi: 'there' });
});

//HEROKU has ability to inject environment variable so we take port from there
//It(process.env.PORT) is allowed in production module
//In development mode this variable(process.env.PORT) will not be defined
const PORT = process.env.PORT || 5000;

//Express tells node to listen port that our app runs
//Node is listening the port not express
app.listen(5000);
