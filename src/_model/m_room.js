const Sequelize = require('sequelize');
var sequelize = require('../_database/db');

const room = sequelize.define('room', {
  id: {
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

//room.sync();

module.exports= room