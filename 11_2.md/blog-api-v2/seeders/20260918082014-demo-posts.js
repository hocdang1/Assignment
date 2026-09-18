'use strict';
module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('posts', [
      { id: 1, content: 'Bai viet dau tien cua A', user_id: 1, created_at: now, updated_at: now },
      { id: 2, content: 'Hoc Sequelize that thu vi', user_id: 1, created_at: now, updated_at: now },
      { id: 3, content: 'Chia se ve Express', user_id: 2, created_at: now, updated_at: now },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
