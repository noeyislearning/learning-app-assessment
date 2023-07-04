import * as store from "../js/store.js";
import * as wss from "../js/wss.js";
import * as webRTCHandler from "../js/webRTCHandler.js";
import * as constants from "./constants.js";

// Initializing the socket variable with the SocketIO Connection
const socket = io("/");
wss.registerSocketEvents(socket);

// Copying the personal code to the clipboard
const personalCodeCopyButton = document.getElementById("personal_code_copy_button");
personalCodeCopyButton.addEventListener("click", () => {
  const personalCode = store.getState().socketId;
  navigator.clipboard.writeText(personalCode);
});

// Connection Buttons
const personalCodeChatButton = document.getElementById("personal_code_chat_button");
const personalCodeVideoButton = document.getElementById("personal_code_video_button");

// Handling the click event on the chat button
personalCodeChatButton.addEventListener("click", () => {
  const calleePersonalCode = document.getElementById("personal_code_input").value;
  const callType = constants.callType.CHAT_PERSONAL_CODE;
  webRTCHandler.sendPreOffer(callType, calleePersonalCode);
});

// Handling the click event on the video button
personalCodeVideoButton.addEventListener("click", () => {
  const calleePersonalCode = document.getElementById(
    "personal_code_input"
  ).value;
  const callType = constants.callType.VIDEO_PERSONAL_CODE;
  webRTCHandler.sendPreOffer(callType, calleePersonalCode);
});

