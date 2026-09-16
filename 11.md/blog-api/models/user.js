'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   static associate(models) {
      User.hasOne(models.Profile,   { foreignKey: 'user_id', as: 'profile' });
      User.hasMany(models.Post,     { foreignKey: 'user_id', as: 'posts' });
      User.hasMany(models.Comment,  { foreignKey: 'user_id', as: 'comments' });
}
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};