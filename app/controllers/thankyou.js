var express = require('express'),
router = express.Router()

module.exports = function (app) {
  app.use('/', router);
  socketsCTRL(app.io)
};

router.get('/thankyou', function (req, res, next) {
  res.render('thankyou', {
    bodyclass: 'thankyou',
    metadesc: 'Thanks for signing up to our mailing list!',
    title: 'Thank you! | Electrical Academy',
  });
});

var socketsCTRL = function(io){
  io.on('connection', function (socket) {
    socket.on('getTest', function (data) {
    });
  });
}