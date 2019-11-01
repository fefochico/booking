var express = require('express');
var c_room = require('../_controller/c_room');

const router = express.Router();

router.get('/all', function(req, res, next){
    c_room.getAll(req, res, next);
});

router.post('/new', function(req, res, next){
    c_room.insert(req, res, next);
});

router.post('/edit', function(req, res, next){
    c_room.edit(req, res, next);
});

router.post('/delete', function(req, res, next){
    c_room.delete(req, res, next);
});

module.exports= router