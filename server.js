const express = require("express");
const helmet = require("helmet");
const RecipeRouter = require('./routers/RecipeRouter')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);
server.use("/api/recipes", RecipeRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Server Running, Enjoy your recipes</h2>`);
});

function logger (req, res, next) {
    console.log(`Timestamp: [${new Date().toISOString()}] | Request Method: ${req.method} | Request Path: ${req.path}`)
    next()
};

module.exports = server;