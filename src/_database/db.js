const Sequelize = require('sequelize');
const sequelize = new Sequelize('xxxx', 'xxxxx', 'xxxx', {
  host: 'localhost',
  dialect: 'mysql',
  pool:{
    max: 20,
    min: 0,
    idle: 30000
  }
});

module.exports = sequelize
