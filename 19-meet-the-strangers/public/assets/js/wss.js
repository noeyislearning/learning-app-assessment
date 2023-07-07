import * as store from "./store.js";
import * as ui from "./ui.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";

let socketIO = null;

export const registerSocketEvents = (socket) => {

  socket.on("connect", () => {

    socketIO = socket;

    console.log("Successfully established a connection with the SocketIO server.");
    store.setSocketId(socket.id);
    ui.updatePersonalCode(socket.id);
  });

  socket.on("pre-offer", (data) => {
    webRTCHandler.handlePreOffer(data);
  });

  socket.on("pre-offer-answer", (data) => {
    webRTCHandler.handlePreOfferAnswer(data);
  });

  socket.on("webRTC-signaling", (data) => {
    switch(data.type) {
      case constants.webRTCSignaling.OFFER:
        console.log("Handling WebRTC offer.");
        webRTCHandler.handleWebRTCOffer(data);
        break;
      case constants.webRTCSignaling.ANSWER:
        console.log("Handling WebRTC answer.");
        webRTCHandler.handleWebRTCAnswer(data);
        break;
      case constants.webRTCSignaling.ICE_CANDIDATE:
        console.log("Handling ICE candidate.");
        webRTCHandler.handleWebRTCCandidate(data);
        break;
      default:
        return;
    };
  });
};

export const sendPreOffer = (data) => {
  socketIO.emit("pre-offer", data);
};

export const sendPreOfferAnswer = (data) => {
  socketIO.emit("pre-offer-answer", data);
};

export const sendDataUsingWebRTCSignaling = (data) => {
  socketIO.emit("webRTC-signaling", data);
};

export const sendWebRTCCandidate = (data) => {
  socketIO.emit("webRTC-signaling", data);
};