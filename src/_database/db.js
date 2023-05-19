const Sequelize = require('sequelize');
const sequelize = new Sequelize('booking', 'booking_user', 'xxxxxx', {
  host: 'localhost',
  dialect: 'mysql',
  pool:{
    max: 20,
    min: 0,
    idle: 30000
  }
});

module.exports = sequelize
