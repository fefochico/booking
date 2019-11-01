var express = require('express');
var bodyParser = require("body-parser");

var app = express();

var r_booking= require('./src/_route/r_booking');
var r_time= require('./src/_route/r_time');
var r_service= require('./src/_route/r_service');
var r_room= require('./src/_route/r_room.js');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/booking/', r_booking);
app.use('/time', r_time);
app.use('/service/', r_service);
app.use('/room', r_room);

app.listen(3000, function() {
    console.log('Application on port 3000');
});