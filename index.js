const server = require("./server.js");

const port = 8100;

server.listen(port, () => {
  console.log(`\nserver up and running on port ${port}\n`);
});
