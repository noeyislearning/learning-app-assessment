import * as constants from "./constants.js";
import * as elements from "./elements.js";

export const updatePersonalCode = (personalCode) => {
  const personalCodeParagraph = document.getElementById(
    "personal_code_paragraph"
  );
  personalCodeParagraph.innerText = personalCode;
};

export const updateLocalVideo = (stream) => {
  const localVideo = document.getElementById("local_video");
  localVideo.srcObject = stream;

  localVideo.addEventListener("loadedmetadata", () => {
    localVideo.play();
  });
};

export const updateRemoteVideo = (stream) => {
  const remoteVideo = document.getElementById("remote_video");
  remoteVideo.srcObject = stream;
};

export const showIncomingCallDialog = (callType, acceptCallHandler, rejectCallHandler) => {
  const callTypeInfo = callType === constants.callType.CHAT_PERSONAL_CODE ? "Chat" : "Video";
  const incomingCallDialog = elements.getIncomingDialog(
    callTypeInfo,
    acceptCallHandler,
    rejectCallHandler
  );

  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());
  dialog.appendChild(incomingCallDialog);
};

export const showCallingDialog = (rejectCallHandler) => {
  const callingDialog = elements.getCallingDialog(rejectCallHandler);

  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());
  dialog.appendChild(callingDialog);
};

export const removeAllDialogs = () => {
  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());
};

export const showInfoDialog = (preOfferAnswer) => {
  let infoDialog = null;

  if (preOfferAnswer === constants.preOfferAnswer.CALL_REJECTED) {
    infoDialog = elements.getInfoDialog(
      "Call rejected",
      "Callee rejected your call"
    );
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALLEE_NOT_FOUND) {
    infoDialog = elements.getInfoDialog(
      "Callee not found",
      "Please check personal code"
    );
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALL_UNAVAILABLE) {
    infoDialog = elements.getInfoDialog(
      "Callee is busy",
      "Please try again later"
    );
  }

  if (infoDialog) {
    const dialog = document.getElementById("dialog");
    dialog.appendChild(infoDialog);

    setTimeout(() => {
      removeAllDialogs();
    }, [3000]);
  }
};

export const showCallElements = (callType) => {
  if (callType === constants.callType.CHAT_PERSONAL_CODE) {
    showChatCallElements();
  }

  if (callType === constants.callType.VIDEO_PERSONAL_CODE) {
    showVideoCallElements();
  }
};

const showChatCallElements = () => {
  const finishConnectionChatButtonContainer = document.getElementById("finish_chat_button_container");
  showElement(finishConnectionChatButtonContainer);

  const newMessageInput = document.getElementById("new_message");
  showElement(newMessageInput);

  disableDashboard();
};

const showVideoCallElements = () => {
  const callButtons = document.getElementById("call_buttons");
  showElement(callButtons);

  const placeholder = document.getElementById("video_placeholder");
  hideElement(placeholder);

  const remoteVideo = document.getElementById("remote_video");
  showElement(remoteVideo);

  const newMessageInput = document.getElementById("new_message");
  showElement(newMessageInput);

  disableDashboard();
};

/**
 * Message elements
 */
export const appendMessage = (message, right = false) => {
  const messagesContainer = document.getElementById("messages_container");
  const messageElement = right
    ? elements.getRightMessage(message)
    : elements.getLeftMessage(message);

  messagesContainer.appendChild(messageElement);
};

export const clearMessenger = () => {
  const messagesContainer = document.getElementById("messages_container");
  messagesContainer.querySelectorAll("*").forEach((n) => n.remove());
};

/**
 * Video & audio elements
 */

const micOnImgSrc = "../assets/utils/images/mic.png";
const micOffImgSrc = "../assets/utils/images/micOff.png";
const cameraOnImgSrc = "../assets/utils/images/camera.png";
const cameraOffImgSrc = "../assets/utils/images/cameraOff.png";

export const updateMicButton = (micActive) => {
  const micButtonimg = document.getElementById("mic_button_image");
  micButtonimg.src = micActive ? micOnImgSrc : micOffImgSrc;
};

export const updateCameraButton = (cameraActive) => {
  const cameraButtonimg = document.getElementById("camera_button_image");
  cameraButtonimg.src = cameraActive ? cameraOnImgSrc : cameraOffImgSrc;
};

/**
 * Dashboards
 */
const enableDashboard = () => {
  const dashboardBloker = document.getElementById("dashboard_blur");
  if (!dashboardBloker.classList.contains("display_none")) {
    dashboardBloker.classList.add("display_none");
  }
};

const disableDashboard = () => {
  const dashboardBloker = document.getElementById("dashboard_blur");
  if (dashboardBloker.classList.contains("display_none")) {
    dashboardBloker.classList.remove("display_none");
  }
};

/**
 * Showing and hiding elements
 * @param {*} element 
 */
const hideElement = (element) => {
  if (!element.classList.contains("display_none")) {
    element.classList.add("display_none");
  }
};

const showElement = (element) => {
  if (element.classList.contains("display_none")) {
    element.classList.remove("display_none");
  }
};

