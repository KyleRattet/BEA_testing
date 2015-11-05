var express = require('express');
var router = express.Router();
var http = require("http");
var request=require("request");



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get data back
router.get('/info', function(req, res, next) {
  res.send('route testing');

});





module.exports = router;
