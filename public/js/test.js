var socket = io.connect();
socket.emit('getTest', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('getTest_RES', function (d) {
  console.log(d);
});