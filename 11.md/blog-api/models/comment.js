'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' });
      Comment.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    post_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};