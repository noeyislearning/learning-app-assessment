const socket = io("/");

socket.on("connect", () => {
  console.log(`Connected to the SocketIO server with the id: ${socket.id}`);
});