'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile,   { foreignKey: 'user_id', as: 'profile' });
      User.hasMany(models.Post,     { foreignKey: 'user_id', as: 'posts' });
      User.hasMany(models.Comment,  { foreignKey: 'user_id', as: 'comments' });
    }
  }

  User.init({
    id:       { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    name:     { type: DataTypes.STRING, allowNull: false },
    age:      DataTypes.INTEGER,
    email:    { type: DataTypes.STRING, allowNull: false, unique: true,
                validate: { isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false },
    birthday: DataTypes.DATE,
    status:   { type: DataTypes.INTEGER, defaultValue: 1 },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    defaultScope: { attributes: { exclude: ['password'] } },  // không trả password
  });

  return User;
};