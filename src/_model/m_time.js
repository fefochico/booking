const Sequelize = require('sequelize');
var sequelize = require('../_database/db');

const time = sequelize.define('time', {
  id: {
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: Sequelize.INTEGER,
  },
  nametime: {
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

time.sync();

module.exports= time