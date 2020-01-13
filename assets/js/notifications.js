const notification = document.getElementById("jsNotifications");

export const handleNewUser = ({ nickname }) => {
  console.log(nickname, " just joined");
};

//window.socket.on(window.events.newUser, handleNewUser);
