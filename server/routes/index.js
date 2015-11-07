var express = require('express');
var router = express.Router();
var http = require("http");
var request= require("request");



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('home route working');
  // res.send('route firing');
});





module.exports = router;
