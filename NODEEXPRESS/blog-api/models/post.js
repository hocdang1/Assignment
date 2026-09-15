'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User,    { foreignKey: 'user_id', as: 'author' });
      Post.hasMany(models.Comment,   { foreignKey: 'post_id', as: 'comments' });
    }
  }

  Post.init({
    id:      { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.STRING, allowNull: false },
    user_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  }, {
    sequelize, modelName: 'Post', tableName: 'posts', underscored: true,
  });

  return Post;
};