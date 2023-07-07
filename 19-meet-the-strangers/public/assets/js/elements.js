/**
 * Incoming Call Dialog
 * @param {*} callTypeInfo 
 * @param {*} acceptCallHandler 
 * @param {*} rejectCallHandler 
 * @returns Incoming Call Dialog
 */
export const getIncomingDialog = (callTypeInfo, acceptCallHandler, rejectCallHandler) => {

  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");  

  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = `Incoming ${callTypeInfo} call`;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("dialog_image_container");
  
  const img = document.createElement("img");
  const avatarImgPath = img.src = "../assets/utils/images/dialogAvatar.png";
  img.src = avatarImgPath;
  imgContainer.appendChild(img);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("dialog_button_container");

  /** 
   * Accept Call Button
   */
  const acceptCallButton = document.createElement("button");
  acceptCallButton.classList.add("dialog_accept_call_button");
  const acceptCallImg = document.createElement("img");
  const acceptCallImgPath = acceptCallImg.src = "../assets/utils/images/acceptCall.png";
  acceptCallButton.appendChild(acceptCallImg);
  btnContainer.appendChild(acceptCallButton);

  /**
   * Reject Call Button
   */
  const rejectCallButton = document.createElement("button");
  rejectCallButton.classList.add("dialog_reject_call_button");
  const rejectCallImg = document.createElement("img");
  const rejectCallImgPath = rejectCallImg.src = "../assets/utils/images/rejectCall.png";
  rejectCallButton.appendChild(rejectCallImg);
  btnContainer.appendChild(rejectCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imgContainer);
  dialogContent.appendChild(acceptCallButton);
  dialogContent.appendChild(rejectCallButton);

  acceptCallButton.addEventListener("click", () => {
    acceptCallHandler();
  });

  rejectCallButton.addEventListener("click", () => {
    rejectCallHandler();
  });

  return dialog;
};

/**
 * Getting Calling Dialog
 * @param {*} rejectCallHandler 
 * @returns Calling Dialog
 */
export const getCallingDialog = (rejectCallHandler) => {
  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");  

  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = "Calling"

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("dialog_image_container");
  
  const img = document.createElement("img");
  const avatarImgPath = img.src = "../assets/utils/images/dialogAvatar.png";
  img.src = avatarImgPath;
  imgContainer.appendChild(img);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("dialog_button_container");

  /**
   * Hang Up Button
   */
  const hangUpCallButton = document.createElement("button");
  hangUpCallButton.classList.add("dialog_reject_call_button");
  const hangUpCallImg = document.createElement("img");
  hangUpCallImg.classList.add("dialog_button_img");
  const hangUpCallImgPath = hangUpCallImg.src = "../assets/utils/images/rejectCall.png";
  hangUpCallButton.appendChild(hangUpCallImg);
  btnContainer.appendChild(hangUpCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imgContainer);
  dialogContent.appendChild(hangUpCallButton);

  hangUpCallButton.addEventListener("click", () => {
    rejectCallHandler();
  });
  return dialog;
};


/**
 * Getting Info Dialog
 * @param {*} title 
 * @param {*} description 
 */
export const getInfoDialog = (title, description) => {
  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");  

  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const dialogTitle = document.createElement("p");
  dialogTitle.classList.add("dialog_title");
  dialogTitle.innerHTML = title;

  const dialogDescription = document.createElement("p");
  dialogDescription.classList.add("dialog_description");
  dialogDescription.innerHTML = description;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("dialog_image_container");
  const img = document.createElement("img");
  const avatarImgPath = img.src = "../assets/utils/images/dialogAvatar.png";
  img.src = avatarImgPath;
  imgContainer.appendChild(img);

  dialogContent.appendChild(dialogTitle);
  dialogContent.appendChild(dialogDescription);
  dialogContent.appendChild(imgContainer);

  return dialog;
};

export const getLeftMessage = (message) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message_left_container");
  const messageParagraph = document.createElement("p");
  messageParagraph.classList.add("message_left_paragraph");
  messageParagraph.innerHTML = message;
  messageContainer.appendChild(messageParagraph);

  return messageContainer;
};

export const getRightMessage = (message) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message_right_container");
  const messageParagraph = document.createElement("p");
  messageParagraph.classList.add("message_right_paragraph");
  messageParagraph.innerHTML = message;
  messageContainer.appendChild(messageParagraph);

  return messageContainer;
};