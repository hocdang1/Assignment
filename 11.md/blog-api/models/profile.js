'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
  }
  Profile.init({
    address: DataTypes.STRING,
    tel: DataTypes.STRING,
    user_id: DataTypes.BIGINT,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};