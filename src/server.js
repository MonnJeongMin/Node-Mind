import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

//Setting
const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

//middleware
//static 관련
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

//routing
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

//Server start action
const handleListening = () =>
  console.log(`✔ Server is running! http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);

//io가 모든 이벤트를 보내는 것 받는 것을 하기 위한 변수
const io = socketIO.listen(server);

//Event emmiter 이벤트를 만드는 것. 연결을 하기 위한 이벤트를 만들어진 것
// on이 만드는 것, emit은 사용하는 것
io.on("connection", socket => socketController(socket));
