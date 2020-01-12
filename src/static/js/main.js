(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotifi = handleMessageNotifi;

// recevied new message event func
function handleMessageNotifi(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaSIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxtQkFBVCxDQUE2QkMsSUFBN0IsRUFBbUM7QUFBQSxNQUM5QkMsT0FEOEIsR0FDUkQsSUFEUSxDQUM5QkMsT0FEOEI7QUFBQSxNQUNyQkMsUUFEcUIsR0FDUkYsSUFEUSxDQUNyQkUsUUFEcUI7QUFFdENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGdCQUE2QkQsT0FBN0I7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlY2V2aWVkIG5ldyBtZXNzYWdlIGV2ZW50IGZ1bmNcclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZmkoZGF0YSkge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfSA6ICR7bWVzc2FnZX1gKTtcclxuICB9Il19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// eslint-disable-next-line no-undef
var socket = io("/"); // new message event func

function sendMessage(message) {
  socket.emit("newMessage", message);
  console.log("Me : ".concat(message));
} // Set user nickname func


function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotifi", _chat.handleMessageNotifi);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZmMwZWRjOTkuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZmkiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCLEMsQ0FFQTs7QUFDQSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQkQsT0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkgsT0FBcEI7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzdCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNEOztBQUlEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxlQUFWLEVBQTJCQyx5QkFBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZU1lc3NhZ2VOb3RpZml9IGZyb20gXCIuL2NoYXRcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG5jb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcblxyXG4vLyBuZXcgbWVzc2FnZSBldmVudCBmdW5jXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgY29uc29sZS5sb2coYE1lIDogJHttZXNzYWdlfWApO1xyXG59XHJcblxyXG4vLyBTZXQgdXNlciBuaWNrbmFtZSBmdW5jXHJcbmZ1bmN0aW9uIHNldE5pY2tuYW1lKG5pY2tuYW1lKSB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZmlcIiwgaGFuZGxlTWVzc2FnZU5vdGlmaSk7XHJcbiJdfQ==
},{"./chat":1}]},{},[2])