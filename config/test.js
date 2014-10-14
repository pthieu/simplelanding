var socket = io.connect();

$(function () {
  socket.emit('getTest');
  socket.on('getTest_RES', function (d) {
    console.log(d);
  });
});