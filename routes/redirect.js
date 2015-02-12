var express = require('express');
var router = express.Router();

router.get('/redirect', function(req, res, next) {

  //redirect logic
  console.log(req);
  //res.redirect('http://google.com');
});

module.exports = router;
