var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/home', router);
};

//this would be home or home/
router.get('/', function (req, res, next) {

  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('home', {
      title: 'This is home',
      articles: articles
    });
  });
});
