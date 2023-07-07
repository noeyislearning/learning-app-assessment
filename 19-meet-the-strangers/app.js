import { fileURLToPath } from 'url';
import path from 'path';
import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { connect } from 'http2';
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
let connectedPeersStrangers = [];

io.on("connection", (socket) => {
  connectedPeers.push(socket.id);
  console.log("*********************");
  console.log("All connected peers: ");
  console.log(connectedPeers);
  console.log("*********************");

  socket.on("pre-offer", (data) => {
    const { calleePersonalCode, callType } = data;

    console.log(calleePersonalCode);
    console.log(connectedPeers);

    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === calleePersonalCode
    );

    console.log(connectedPeer);

    if (connectedPeer) {
      const data = {
        callerSocketId: socket.id,
        callType,
      };

      io.to(calleePersonalCode).emit("pre-offer", data);
    } else {
      const data = {
        preOfferAnswer: "CALLEE_NOT_FOUND",
      };
      io.to(socket.id).emit("pre-offer-answer", data);
    }
  });

  socket.on("pre-offer-answer", (data) => {
    const { callerSocketId } = data;

    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === callerSocketId
    );

    if (connectedPeer) {
      io.to(callerSocketId).emit("pre-offer-answer", data);
    } else {
      const data = {
        preOfferAnswer: "CALLER_NOT_FOUND",
      };
      io.to(socket.id).emit("pre-offer-answer", data);
    }
  });

  socket.on("webRTC-signaling", (data) => {
    const { connectedUserSocketId } = data;

    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === connectedUserSocketId
    );

    if (connectedPeer) {
      io.to(connectedUserSocketId).emit("webRTC-signaling", data);
    }
  });

  socket.on("user-hanged-up", (data) => {
    const { connectedUserSocketId } = data;

    const connectedPeer = connectedPeers.find(
      (peerSocketId) => peerSocketId === connectedUserSocketId
    );

    if (connectedPeer) {
      io.to(connectedUserSocketId).emit("user-hanged-up");
    }
  });

  socket.on("stranger-connection-status", (data) => {
    const { status } = data;

    if (status) {
      connectedPeersStrangers.push(socket.id);
    } else {
      const newConnectedPeersStrangers = connectedPeersStrangers.filter(
        (peerSocketId) => peerSocketId !== socket.id
      );

      connectedPeersStrangers = newConnectedPeersStrangers;
    }
  });

  socket.on("get-stranger-socket-id", () => {
    let randomStrangerSocketId;

    const filteredConnectedPeersStrangers = connectedPeersStrangers.filter(
      (peerSocketId) => peerSocketId !== socket.id
    )

    if (filteredConnectedPeersStrangers.length > 0) {
      randomStrangerSocketId = filteredConnectedPeersStrangers[
        Math.floor(Math.random() * filteredConnectedPeersStrangers.length)
      ];
    } else {
      randomStrangerSocketId = null;
    }

    const data = {
      randomStrangerSocketId,
    }

    io.to(socket.id).emit("stranger-socket-id", data);
  });

  socket.on("disconnect", () => {
    console.log("User has disconnected.\n");

    const newConnectedPeers = connectedPeers.filter((peerSocketId) => peerSocketId !== socket.id);
    connectedPeers = newConnectedPeers;
    
    const newConnectedPeersStrangers = connectedPeersStrangers.filter(
      (peerSocketId) => peerSocketId !== socket.id
    );
    connectedPeersStrangers = newConnectedPeersStrangers;
  });
});

// Server Listening to PORT: 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. \n`);
});
