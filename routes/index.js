var express = require('express');
var router = express.Router();

router.get('/iframe', function(req, res, next) {
  console.log("iframe route in index")
  res.render('iframe');
});

router.get('/redirect', function(req, res, next) {
  console.log("/redirect route");
  //redirect logic
  console.log(req._parsedUrl);
  //res.redirect('http://google.com');
});

router.get('/', function(req, res, next) {
  console.log("home route")
  res.render('index', { title: 'Express' });
});

module.exports = router;
