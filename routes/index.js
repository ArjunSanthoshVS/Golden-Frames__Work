var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('User/Home');
});

router.get('/about', function (req, res, next) {
  res.render('User/About');
});

router.get('/blog', function (req, res, next) {
  res.render('User/Blog');
});

module.exports = router;
