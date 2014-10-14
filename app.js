var express = require('express'),
  socketIO = require('socket.io');
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();
var http = require('http').Server(app);
var io = socketIO(http);

app.io = io; // we will pass only the app object into express.js config, so we will put io into it

require('./config/express')(app, config);

http.listen(config.port);