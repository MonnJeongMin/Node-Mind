const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) =>
  fireNotification(`✔  New User joined (${nickname})`, "blue");

export const handleDisconnected = ({ nickname }) =>
  fireNotification(`🤦‍♂️ User Disconnected (${nickname})`,     "orange");
