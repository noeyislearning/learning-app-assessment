import * as store from "./store.js";

let mediaRercoder;

const recordedChunks = [];
const vp9 = "video/webm; codecs=vp=9";
const options = {
  mimeType: vp9,
}

export const startRecording = () => {
  const remoteStream = store.getState().remoteStream;

  if (MediaRecorder.isTypeSupported(vp9)) {
    mediaRercoder = new MediaRecorder(remoteStream, options);
  } else {
    mediaRercoder = new MediaRecorder(remoteStream);
  }

  mediaRercoder.ondataavailable = handleRecordedDataAvailable;
  mediaRercoder.start();
};

export const pauseRecording = () => {
  mediaRercoder.pause();
};

export const resumeRecording = () => {
  mediaRercoder.resume();
};

export const stopRecording = () => {
  mediaRercoder.stop();
};

const download = () => {
  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  })

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = `${Date.now()}.webm`;
  a.click();
  window.URL.revokeObjectURL(url);

};

const handleRecordedDataAvailable = (event) => {
  if (event.data.size > 0) { 
    recordedChunks.push(event.data);
    download();
    // ui.updateRecordingTimer(Date.now() - startTime);
  }
};