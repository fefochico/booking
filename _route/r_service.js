var express = require('express');
var c_service = require('../_controller/c_service');

const router = express.Router();

router.get('/all', function(req, res, next){
    c_service.getAll(req, res, next);
});

router.post('/new', function(req, res, next){
    c_service.insert(req, res, next);
});

router.post('/edit', function(req, res, next){
    c_service.edit(req, res, next);
});

router.post('/delete', function(req, res, next){
    c_service.delete(req, res, next);
});

module.exports= router