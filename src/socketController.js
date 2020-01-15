import events from "./events";

let sockets = [];

// 소켓 관련 이벤트 핸들러를 담당하는 것.

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
   superBroadcast(events.playerUpdate, { sockets });

  socket.on(events.setNickname, ({ nickname }) => {
    console.log(`User : ${nickname} login`);
    socket.nickname = nickname;
    sockets.push({id : socket.id, points: 0, nickname: nickname});
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
  });
  socket.on(events.disconnect, () => {
    // 연결이 끊긴 소켓만 찾는다.
    sockets = sockets.filter(aSocket => aSocket.id !== socket.id);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });

  socket.on(events.beginPath, ({ x, y }) => {
    broadcast(events.beganPath, { x, y });
   });

  socket.on(events.strokePath, ({ x, y, color}) => {
    broadcast(events.strokedPath, { x, y, color });
    console.log(x, y);
    });

  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, {color});
  });
};

export default socketController;
