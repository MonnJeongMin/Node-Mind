import {handleMessageNotifi} from "./chat";

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



socket.on("messageNotifi", handleMessageNotifi);
