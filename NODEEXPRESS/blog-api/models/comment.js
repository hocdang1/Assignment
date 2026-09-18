'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' });
      Comment.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
    }
  }

  Comment.init({
    id:      { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.STRING, allowNull: false },
    post_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
    user_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  }, {
    sequelize, modelName: 'Comment', tableName: 'comments', underscored: true,
  });

  return Comment;
};