'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
  }

  Profile.init({
    id:       { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    address:  DataTypes.STRING,
    tel:      DataTypes.STRING,
    province: DataTypes.STRING,
    user_id:  { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  }, {
    sequelize, modelName: 'Profile', tableName: 'profiles', underscored: true,
  });

  return Profile;
};