'use strict'
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

const Food =( sequelize, DataTypes ) => sequelize.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'food',
  timestamps: false,
});

module.exports = Food;