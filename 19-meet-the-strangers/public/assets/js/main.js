import * as store from "./store.js";
import * as wss from "./wss.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";

// Initializing the socket variable with the SocketIO Connection
const socket = io("/");
wss.registerSocketEvents(socket);

// Copy the personal code to the clipboard
const personalCodeCopyButton = document.getElementById("personal_code_copy_button");
personalCodeCopyButton.addEventListener("click", () => {
  const personalCode = store.getState().socketId;
  navigator.clipboard && navigator.clipboard.writeText(personalCode);
});

// Connection toggle/buttons (Code & Video Chat)
// Code Chat Button
const personalCodeChatButton = document.getElementById("personal_code_chat_button"); 
personalCodeChatButton.addEventListener("click", () => {

  const calleePersonalCode = document.getElementById("personal_code_input").value;
  const callType = constants.callType.CHAT_PERSONAL_CODE;

  webRTCHandler.sendPreOffer(callType, calleePersonalCode);
});

// Video Chat Button
const personalCodeVideoButton = document.getElementById("personal_code_video_button"); 
personalCodeVideoButton.addEventListener("click", () => {

  const calleePersonalCode = document.getElementById("personal_code_input").value;
  const callType = constants.callType.VIDEO_PERSONAL_CODE;

  webRTCHandler.sendPreOffer(callType, calleePersonalCode);
});