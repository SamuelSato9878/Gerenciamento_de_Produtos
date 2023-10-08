const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(function(){
    console.log("Conexão realizada com sucesso");
  })
  .catch(function(){
    console.log("Falha na Conexão");
  });

module.exports = sequelize;

