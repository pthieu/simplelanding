var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
MailingList = mongoose.model('MailingList');

module.exports = function (app) {
  app.use('/', router);
  socketsCTRL(app.io)
};

router.get('/', function (req, res, next) {
  res.render('landing', {
    bodyclass: 'landing',
    metadesc: 'Learn the fundamentals of electrical engineering interactively for free, step-by-step from basics to advanced theory and electronics application',
    title: 'Electrical Academy | Learn electrical engineering online interactively for free!',
  });
});

router.post('/mailinglist', function (req, res, next) {
  //if email exists, server check
  if (!!req.body.email){
    MailingList.findOne({'email': req.body.email}, function(err, email) {
      if (!!email) return; //do nothing if email exists
      var Mail = new MailingList({
        email:req.body.email,
      });

      Mail.save(function(err, email, n) {
        if (err) console.error(err);
      });
    });
  }
  var redirect = "/thankyou";
  res.redirect(302, redirect);
});

var socketsCTRL = function(io){
  io.on('connection', function (socket) {
    socket.on('getTest', function (data) {
    });
  });
}