import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls
} from "./paint";

const board = document.getElementById("jsPBoard");

const notifs = document.getElementById("jsNotifs");

const addPlayers = players => {
  board.innerHTML = "";
  players.forEach(player => {
    const playerElement = document.createElement("div");
    playerElement.innerText = `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  notifs.innerHTML = "";
  disableCanvas();
  hideControls();
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  notifs.innerHTML = "";
  notifs.innerHTML = `😊You are the leader, 🐱‍👓paint: ${word}`;
};
