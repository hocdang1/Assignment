'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      address:  { type: Sequelize.STRING },
      tel:      { type: Sequelize.STRING },
      province: { type: Sequelize.STRING },
      user_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        unique: true,                       // 1-1: mỗi user 1 profile
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('profiles');
  },
};