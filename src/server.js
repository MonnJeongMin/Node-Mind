import { join } from "path";
import express from "express";
import socketIO from "socket.io";

//Setting
const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

//middleware
//static 관련
app.use(express.static(join(__dirname,"static")));

//routing
app.get("/", (req, res)=> res.render("home"));

//Server start action
const handleListening = () => console.log(`✔ Server is running! http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);

//io가 모든 이벤트를 보내는 것 받는 것을 하기 위한 변수
const io = socketIO.listen(server);

//Event emmiter 이벤트를 만드는 것.
io.on("connection", () => console.log("✔ Somebody Connected!"));
