import events from "./events";

// 소켓 관련 이벤트 핸들러를 담당하는 것.

const socketController = socket => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(`User : ${nickname} login`);
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });

  socket.on(events.beginPath, ({ x, y }) => {
    broadcast(events.beganPath, { x, y });
   });

  socket.on(events.strokePath, ({ x, y }) => {
    broadcast(events.strokedPath, { x, y });
    console.log(x, y);
    });
};

export default socketController;
