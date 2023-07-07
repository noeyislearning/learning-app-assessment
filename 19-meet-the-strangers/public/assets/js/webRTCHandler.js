import * as wss from "./wss.js";
import * as constants from "./constants.js";
import * as ui from "./ui.js";
import * as store from "./store.js";

let connectedUserDetails;
let peerConnection;
let dataChannel;

const STUN_SERVER = "stun:stun1.l.google.com:19302"

const peerConfiguration = {
  iceServers: [
    { urls: STUN_SERVER },
  ]
}

export const getLocalPreview = () => {
  navigator.mediaDevices.getUserMedia(
    { video: true, audio: true },
  )
  .then((stream) => {
    ui.updateLocalVideo(stream);
    ui.showVideoCallButtons();
    store.setCallState(constants.callState.CALL_AVAILABLE);
    store.setLocalStream(stream);
  })
  .catch((err) => {
    alert("Error occured when trying to get an access to your camera.");
    console.error(err);
  });
}

const createPeerConnection = () => {
  peerConnection = new RTCPeerConnection(peerConfiguration);

  dataChannel = peerConnection.createDataChannel("chat");

  peerConnection.ondatachannel = (event) => {
    const dataChannel = event.channel;
    dataChannel.onopen = () => {
    };

    dataChannel.onmessage = (event) => {
      const parsedMessage = JSON.parse(event.data);
      ui.appendMessage(parsedMessage);  
    };
  };

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      wss.sendDataUsingWebRTCSignaling({
        connectedUserSocketId: connectedUserDetails.socketId,
        type: constants.webRTCSignaling.ICE_CANDIDATE,
        candidate: event.candidate,
      })
    }
  };

  peerConnection.onconnectionstatechange = (event) => {
    if (peerConnection.connectionState === "connected") {
      console.info("Successfully connected with other peer.");
    }
  }; 

  const remoteStream = new MediaStream();
  store.setRemoteStream(remoteStream);
  ui.updateRemoteVideo(remoteStream);

  peerConnection.ontrack = (event) => {
    remoteStream.addTrack(event.track);
  };

  if (connectedUserDetails.callType === constants.callType.VIDEO_PERSONAL_CODE || connectedUserDetails.callType === constants.callType.VIDEO_STRANGER) {
    const localStream = store.getState().localStream;

    for (const track of localStream.getTracks()) {
      peerConnection.addTrack(track, localStream);
    }
  };
};

export const sendMessageUsingDataChannel = (message) => {
  const stringifiedMessage = JSON.stringify(message);
  dataChannel.send(stringifiedMessage);
};


export const sendPreOffer = (callType, calleePersonalCode) => {

  connectedUserDetails = {
    callType,
    socketId: calleePersonalCode,
  }

  if (callType === constants.callType.CHAT_PERSONAL_CODE || callType === constants.callType.VIDEO_PERSONAL_CODE) {
    const data = {
      callType,
      calleePersonalCode,
    };

    ui.showCallingDialog(callingDialogRejectCallHandler);
    store.setCallState(constants.callState.CALL_UNAVAILABLE);
    wss.sendPreOffer(data);
  }

  if (
    callType === constants.callType.CHAT_STRANGER ||
    callType === constants.callType.VIDEO_STRANGER
  ) {
    const data = {
      callType,
      calleePersonalCode,
    };
    store.setCallState(constants.callState.CALL_UNAVAILABLE);
    wss.sendPreOffer(data);
  }
} 

export const handlePreOffer = (data) => {
  const { callType, callerSocketId } = data;

  if (!checkCallPossibility()) return sendPreOfferAnswer(constants.preOfferAnswer.CALL_UNAVAILABLE, callerSocketId);

  connectedUserDetails = {
    callType,
    socketId: callerSocketId,
  };

  store.setCallState(constants.callState.CALL_UNAVAILABLE); 

  if (callType === constants.callType.CHAT_PERSONAL_CODE || callType === constants.callType.VIDEO_PERSONAL_CODE) {
    ui.showIncomingCallDialog(callType, acceptCallHandler, rejectCallHandler);
  }

  if (
    callType === constants.callType.CHAT_STRANGER ||
    callType === constants.callType.VIDEO_STRANGER
  ) {
    sendPreOfferAnswer(constants.preOfferAnswer.CALL_ACCEPTED);
    createPeerConnection();
    ui.showCallElements(connectedUserDetails.callType);
  }
};

const acceptCallHandler = () => {
  sendPreOfferAnswer(constants.preOfferAnswer.CALL_ACCEPTED);
  createPeerConnection();
  ui.showCallElements(connectedUserDetails.callType);
};

const rejectCallHandler = () => {
  sendPreOfferAnswer(); 
  setIncomingCallsAvailable();
  sendPreOfferAnswer(constants.preOfferAnswer.CALL_REJECTED);
};

const callingDialogRejectCallHandler = () => {
  const data = {
    connectedUserSocketId: connectedUserDetails.socketId,
  }
  closePeerConnectionAndResetState();

  wss.sendUserHangedUp(data);
};

const sendPreOfferAnswer = (preOfferAnswer, callerSocketId = null) => {
  const socketId = callerSocketId ? callerSocketId : connectedUserDetails.socketId;

  const data = {
    callerSocketId: socketId,
    preOfferAnswer,
  };

  ui.removeAllDialogs();
  wss.sendPreOfferAnswer(data);
};

export const handlePreOfferAnswer = async (data) => {
  const { preOfferAnswer } = data;

  ui.removeAllDialogs();

  if (preOfferAnswer === constants.preOfferAnswer.CALLEE_NOT_FOUND) {
    setIncomingCallsAvailable();
    ui.showInfoDialog(preOfferAnswer);
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALL_ACCEPTED) {
    ui.showCallElements(connectedUserDetails.callType);
    createPeerConnection();
    await sendWebRTCOffer();
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALL_REJECTED) {
    setIncomingCallsAvailable();
    ui.showInfoDialog(preOfferAnswer);
  }

  if (preOfferAnswer === constants.preOfferAnswer.CALL_UNAVAILABLE) {
    setIncomingCallsAvailable();
    ui.showInfoDialog(preOfferAnswer);
  }
};

const sendWebRTCOffer = async () => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  wss.sendDataUsingWebRTCSignaling({
    connectedUserSocketId: connectedUserDetails.socketId,
    type: constants.webRTCSignaling.OFFER,
    offer: offer,
  });
};

export const handleWebRTCOffer = async (data) => {
  await peerConnection.setRemoteDescription(data.offer);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  wss.sendDataUsingWebRTCSignaling({
    connectedUserSocketId: connectedUserDetails.socketId,
    type: constants.webRTCSignaling.ANSWER,
    answer: answer,
  });
};

export const handleWebRTCAnswer = async (data) => {
  await peerConnection.setRemoteDescription(data.answer);
};

export const handleWebRTCCandidate = async (data) => {
  try {
    await peerConnection.addIceCandidate(data.candidate);
  } catch (err) {
    console.error("Error occured when trying to add received Ice Candidate.", err);
  }
};

export const switchBetweenCameraAndScreenSharing = async (screenSharingActive) => {
  if (screenSharingActive) {
    const locatStream = store.getState().localStream;
    const senders = peerConnection.getSenders();

    const sender = senders.find((sender) => {
      return sender.track.kind === locatStream.getVideoTracks()[0].kind;
    });

    if (sender) {
      sender.replaceTrack(locatStream.getVideoTracks()[0]);
    };

    store.getState().screennSharingStream.getTracks().forEach((track) => track.stop());

    store.setScreenSharingActive(!screenSharingActive);

    ui.updateLocalVideo(locatStream);
  } else {
    try {
      const screenSharingStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      store.setScreenSharingActive(screenSharingStream);

      const senders = peerConnection.getSenders();
      const sender = senders.find((sender) => {
        return sender.track.kind === screenSharingStream.getVideoTracks()[0].kind;
      });

      if (sender) {
        sender.replaceTrack(screenSharingStream.getVideoTracks()[0]);
      }

      store.setScreenSharingActive(!screenSharingActive);

      ui.updateLocalVideo(screenSharingStream);
    } catch (err) {
      console.error("Error occured when trying to get screen sharing stream.", err);
    }
  }
};

/**
 * Hang Up
 */
export const handleHangUp = () => {
  const data = {
    connectedUserSocketId: connectedUserDetails.socketId,
  }

  wss.sendUserHangedUp(data);
  closePeerConnectionAndResetState();
};

export const handleConnectedUserHangedUp = () => {
  closePeerConnectionAndResetState();
};

const closePeerConnectionAndResetState = () => {
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
  }

  if (connectedUserDetails.callType === constants.callType.VIDEO_PERSONAL_CODE || connectedUserDetails.callType === constants.callType.VIDEO_STRANGER) {
    store.getState().localStream.getVideoTracks()[0].enabled = true;
    store.getState().localStream.getAudioTracks()[0].enabled = true;
  }

  ui.updateUIAfterHangUp(connectedUserDetails.callType);
  setIncomingCallsAvailable();
  connectedUserDetails = null;
};

const checkCallPossibility = (callType) => {
  const callState = store.getState().callState;

  if (callState === constants.callState.CALL_AVAILABLE) {
      return true;
  };


  if ((callType === constants.callType.VIDEO_PERSONAL_CODE || callType === constants.callType.VIDEO_STRANGER) && callState === constants.callState.CALL_AVAILABLE_ONLY_CHAT) {
    return false;
  } 
  return false;
};

const setIncomingCallsAvailable = () => {
  const localStream = store.getState().localStream;
  
  localStream ? store.setCallState(constants.callState.CALL_AVAILABLE) : store.setCallState(constants.callState.CALL_AVAILABLE_ONLY_CHAT);
};