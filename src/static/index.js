// eslint-disable-next-line no-undef
const socket = io("/");

// new message event func
function sendMessage(message) {
  socket.emit("newMessage", message);
}

// recevied new message event func
function handleMessageNotifi(data) {
  const { message } = data;
  console.log(`Client : ${message}`);
}

socket.on("messageNotifi", handleMessageNotifi);
