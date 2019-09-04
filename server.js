const express = require("express");
const postRoutes = require("./posts/postRoutes.js");

const server = express();

server.use(express.json());
server.use("/api/posts", postRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running..." });
});

module.exports = server;
