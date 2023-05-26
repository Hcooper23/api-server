const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food');
const ClothesModel = require('./clothes');
const Food = FoodModel(sequelize, DataTypes);
const Clothes = ClothesModel(sequelize, DataTypes);

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' :process.env.DATABASE_URL;

const sequelize = new Sequelize (DATABASE_URL);

// Establish associations
Food.hasMany(Clothes, { as: 'clothes', foreignKey: 'foodId' });
Clothes.belongsTo(Food, { as: 'food', foreignKey: 'foodId' });

module.exports = {
  Food,
  Clothes,
};