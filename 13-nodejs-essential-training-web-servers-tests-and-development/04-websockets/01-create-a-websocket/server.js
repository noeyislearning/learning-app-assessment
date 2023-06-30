const { Server } = require("ws");

const PORT = 3000;

const websocket = new Server({
  port: PORT
})

let messages = [];

websocket.on("connection", socket => {

  socket.on("message", message => {
    console.log(`Received: ${message}`);
    messages.push(message);
    websocket.clients.forEach(clientSocket => clientSocket.send(message));
  });
  
  socket.on("close", () => {
    console.log(`Socket disconnected.`);
  });

  socket.send("Welcome to Cyber Chat.")

  if (messages.length) {
    socket.send(`Previous messages: ${messages.join("\n")}`);
    messages.forEach(message => socket.send(message));
  }

  console.log(`New socket connected.`);
});

console.log(`Chat server listening on port ${PORT}`)