const server = require("./server.js");

const port = 8500;

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running..." });
});

server.listen(port, () => {
  console.log(`\nserver up and running on port ${port}\n`);
});
