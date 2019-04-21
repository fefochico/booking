const Sequelize = require('sequelize');
var sequelize = require('../_database/db');
var m_room= require('./m_room');
var m_time= require('./m_time');
var m_service= require('./m_service');


const booking = sequelize.define('booking', {
  id: {
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: Sequelize.INTEGER,
  },
  idstarttime: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  idservice: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  idroom: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  date:{
    allowNull: false,
    type: Sequelize.DATE
  },
  clientname: {
    allowNull: false,
    type: Sequelize.STRING
  },
  clientsurname: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  clienttelephone: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  clientmail: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


booking.belongsTo(m_room, { foreignKey: 'idroom', onDelete: 'cascade'});
booking.belongsTo(m_service, { foreignKey: 'idservice', onDelete: 'cascade'});
booking.belongsTo(m_time, { foreignKey: 'idtime', onDelete: 'cascade'});

booking.getDataBookingBetweenDates= function(req, res, next) {
  return sequelize.query(
    `SELECT b.*, t.id AS idtime, t.nametime AS time, s.id AS idservie, s.name AS service, s.unit, r.id AS idroom, r.name AS room 
    FROM bookings AS b 
    LEFT JOIN times AS t ON b.idstarttime=t.id 
    LEFT JOIN services AS s ON b.idservice=s.id 
    LEFT JOIN rooms AS r ON b.idroom=r.id 
    WHERE date BETWEEN $1 AND $2`,
     { bind: [req.params.date1, req.params.date2], type: sequelize.QueryTypes.SELECT }
  );
};

booking.sync();


module.exports= booking