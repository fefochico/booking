var express = require('express');
var c_booking = require('../_controller/c_booking');

const router = express.Router();

router.get('/all', function(req, res, next){
    c_booking.getAll(req, res, next);
});

router.post('/new', function(req, res, next){
    c_booking.insert(req, res, next);
});

router.post('/edit', function(req, res, next){
    c_booking.edit(req, res, next);
});

router.post('/delete', function(req, res, next){
    c_booking.delete(req, res, next);
});

module.exports= router