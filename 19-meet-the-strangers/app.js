import { fileURLToPath } from 'url';
import path from 'path';
import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;
const app = express();

// Server
const server = http.createServer(app);
const io = new Server(server);

// Static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

// SocketIO
let connectedPeers = [];

io.on("connection", (socket) => {
  connectedPeers.push(socket.id);
  console.log("*********************");
  console.log("All connected peers: ");
  console.log(connectedPeers);
  console.log("*********************");

  socket.on("disconnect", () => {
    console.log("User has disconnected.\n");

    const newConnectedPeers = connectedPeers.filter((peerSocketId) => peerSocketId !== socket.id);

    connectedPeers = newConnectedPeers;
  });
});

// Server Listening to PORT: 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. \n`);
});