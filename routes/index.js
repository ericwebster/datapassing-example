var express = require('express');
var router = express.Router();

router.get('/iframe', function(req, res, next) {
  res.render('iframe');
});

router.get('/redirect', function(req, res, next) {
  //redirect logic
  //in here we take the encoded URI, decode it, find any custom data we want to add then forward to that domain.
  var uri = decodeURI(req.param('uri'));
  uri = uri.replace(/\{pmoID\}/g, "6549871231");;
  res.redirect( uri );
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
