const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

  const Produto = sequelize.define("Produto", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Nome_Produto: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate:{
        len: [2, 30]
      }
    },
    Descricao_Produto: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Preco_Produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Estoque_Produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  });

  

module.exports = Produto;
