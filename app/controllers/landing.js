var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
  socketsCTRL(app.io)
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('landing', {
      bodyclass: 'landing',
      title: 'This is landing',
      articles: articles
    });
  });
});

var socketsCTRL = function(io){
  io.on('connection', function (socket) {
    socket.on('getTest', function (data) {
      socket.emit('getTest_RES', 'wjhat the fuck');
    });
  });
}