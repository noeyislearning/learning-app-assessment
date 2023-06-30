const { createServer } = require("http");
const socketIO = require("socket.io");

const PORT = 3000;

const server = createServer().listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

const io = socketIO(server);

io.on("connection", socket => {

  console.log(`${io.engine.clientsCount} clients connected.`);
  console.log(`Socket: ${socket.id} connected.`);

  socket.on("message", message => {
    console.log(`${socket.id}: ${message}`);
    io.socket.emit("user-message", message, socket.id);
  });

  socket.on("disconnect", () => {
    console.log(`Socket: ${socket.id} disconnected.`);
  });
});

console.log("Server started.")