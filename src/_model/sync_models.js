
const Sequelize = require('sequelize');
var sequelize = require('../_database/db');

var times= require('./m_time');
var room= require('./m_room');
var service= require('./m_service');
var booking= require('./m_booking');

function syncAll(){
    times.sync();
    room.sync();
    service.sync();
    booking.sync();
}

module.exports= syncAll;