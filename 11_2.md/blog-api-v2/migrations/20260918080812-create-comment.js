'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: { type: Sequelize.BIGINT.UNSIGNED, allowNull: false, autoIncrement: true, primaryKey: true },
      content: { type: Sequelize.STRING, allowNull: false },
      post_id: {
        type: Sequelize.BIGINT.UNSIGNED, allowNull: false,
        references: { model: 'posts', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.BIGINT.UNSIGNED, allowNull: false,
        references: { model: 'users', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE',
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
    await queryInterface.addIndex('comments', ['post_id']);
    await queryInterface.addIndex('comments', ['user_id']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('comments');
  },
};
