const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const FoodModel = require('./food');
const ClothesModel = require('./clothes');
const Food = FoodModel(sequelize, Sequelize);
const Clothes = ClothesModel(sequelize, Sequelize);

// Establish associations
Food.hasMany(Clothes, { as: 'clothes', foreignKey: 'foodId' });
Clothes.belongsTo(Food, { as: 'food', foreignKey: 'foodId' });

module.exports = {
  Food,
  Clothes,
};