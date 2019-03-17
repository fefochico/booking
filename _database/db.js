const Sequelize = require('sequelize');
const sequelize = new Sequelize('booking', 'xxxx', 'xxxxx', {
  host: 'localhost',
  dialect: 'mysql',
  pool:{
    max: 20,
    min: 0,
    idle: 30000
  }
});

module.exports = sequelize
