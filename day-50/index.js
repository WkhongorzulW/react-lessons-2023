console.log("Day 50 Express Server");

const http = require("http");

const PORT = 8000;
const server = http.createServer((request, response) => {
  response.setStatusCode = 200;
  response.setHeader("Content-Type", "text/plain");

  response.end("Hello World\n");
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
