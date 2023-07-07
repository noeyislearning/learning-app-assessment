import * as store from "./store.js";
import * as wss from "./wss.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";
import * as ui from "./ui.js";
import * as recording from "./recording.js";

// Initializing the socket variable with the SocketIO Connection
const socket = io("/");
wss.registerSocketEvents(socket);

// Accessing User's Web Camera
webRTCHandler.getLocalPreview();

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

// Video Buttons
const micButton = document.getElementById("mic_button");
micButton.addEventListener("click", () => {
  const localStream = store.getState().localStream;
  const micEnabled = localStream.getAudioTracks()[0].enabled;
  localStream.getAudioTracks()[0].enabled = !micEnabled;

  ui.updateMicButton(micEnabled);

  webRTCHandler.toggleMicIcon(!micEnabled);
});

const cameraButton = document.getElementById("camera_button");
cameraButton.addEventListener("click", () => {
  const localStream = store.getState().localStream;
  const cameraEnabled = localStream.getVideoTracks()[0].enabled;
  localStream.getVideoTracks()[0].enabled = !cameraEnabled;

  ui.updateCameraButton(cameraEnabled);

  webRTCHandler.toggleCameraIcon(!cameraEnabled);
});

// Screen Sharing Button
const switchForScreenSharingButton = document.getElementById("screen_sharing_button");
switchForScreenSharingButton.addEventListener("click", () => {
  const screenSharingActive = store.getState().screenSharingActive;
  webRTCHandler.switchBetweenCameraAndScreenSharing(screenSharingActive);
});

// Messensger
const newMessageInput = document.getElementById("new_message_input"); 
newMessageInput.addEventListener("keydown", (event) => {
  console.log("Key down event.");
  const key = event.key;

  if (key === "Enter") {
    webRTCHandler.sendMessageUsingDataChannel(event.target.value);
    ui.appendMessage(event.target.value, true);
    newMessageInput.value = "";
  }
});

const sendMessageButton = document.getElementById("send_message_button");
sendMessageButton.addEventListener("click", () => {
  const message = newMessageInput.value;
  webRTCHandler.sendMessageUsingDataChannel(message);
  ui.appendMessage(message, true);
  newMessageInput.value = "";
});

// Recording
const startRecordingButton = document.getElementById("start_recording_button");
startRecordingButton.addEventListener("click", () => {
  recording.startRecording();
  ui.showRecordingPanel();
});

const stopRecordingButton = document.getElementById("stop_recording_button");
stopRecordingButton.addEventListener("click", () => {
  recording.stopRecording();
  ui.resetRecordingButtons();
});

const pauseRecordingButton = document.getElementById("pause_recording_button");
pauseRecordingButton.addEventListener("click", () => {
  recording.pauseRecording();
  ui.switchRecordingButtons(true);
});

const resumeRecordingButton = document.getElementById("resume_recording_button");
resumeRecordingButton.addEventListener("click", () => {
  recording.resumeRecording();
  ui.switchRecordingButtons(false);
});