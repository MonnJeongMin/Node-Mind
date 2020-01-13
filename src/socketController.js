import events from "./events";

// 소켓 관련 이벤트 핸들러를 담당하는 것.

const socketController = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(`User : (${nickname})`);
    socket.broadcast.emit(events.newUser,{ nickname });
    socket.nickname = nickname;
  });
};

export default socketController;
