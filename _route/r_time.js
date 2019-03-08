var express = require('express');
var c_time = require('../_controller/c_time');

const router = express.Router();

router.get('/all', function(req, res, next){
    c_time.getAll(req, res, next);
});

router.post('/new', function(req, res, next){
    c_time.insert(req, res, next);
});

router.post('/delete', function(req, res, next){
    c_time.delete(req, res, next);
});

module.exports= router