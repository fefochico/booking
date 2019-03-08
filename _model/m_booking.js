const Sequelize = require('sequelize');
var sequelize = require('../_database/db');

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
  clientname: {
    allowNull: false,
    type: Sequelize.STRING
  },
  clientsurname: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  clienttelephone: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  clientemail: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

booking.sync();

module.exports= booking