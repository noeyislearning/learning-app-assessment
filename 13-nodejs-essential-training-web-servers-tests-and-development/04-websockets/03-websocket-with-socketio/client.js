const io  = require("socket.io-client");

const PORT = 3000;

const socket = io(`http://localhost:${PORT}`);

socket.on("connect", () => {
  console.log(`Socket Client connected.`);
});

socket.on("user-message", (message, id) => {
  console.log(`${id}: ${message}`);
});

process.stdin.on("data", data => {
  socket.emit("message", data.toString().trim());
});