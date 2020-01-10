// eslint-disable-next-line no-undef
const socket = io("/");

// new message event func
function sendMessage(message) {
  socket.emit("newMessage", message);
  console.log(`Me : ${message}`);
}

// Set user nickname func
function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

// recevied new message event func
function handleMessageNotifi(data) {
  const { message, nickname } = data;
  console.log(`${nickname} : ${message}`);
}

socket.on("messageNotifi", handleMessageNotifi);
