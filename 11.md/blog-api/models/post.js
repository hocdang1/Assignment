'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
   
    static associate(models) {
      // define association here
       Post.belongsTo(models.User,    { foreignKey: 'user_id', as: 'author' });
      Post.hasMany(models.Comment,   { foreignKey: 'post_id', as: 'comments' });
    }
  }
  Post.init({
    content: DataTypes.STRING,
    user_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};