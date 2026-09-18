'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('comments', [
      { id: 1, content: 'Hay qua!',        post_id: 1, user_id: 2, created_at: now, updated_at: now },
      { id: 2, content: 'Cam on ban',      post_id: 1, user_id: 3, created_at: now, updated_at: now },
      { id: 3, content: 'Minh cung dang hoc', post_id: 2, user_id: 2, created_at: now, updated_at: now },
      { id: 4, content: 'Bai viet huu ich', post_id: 3, user_id: 1, created_at: now, updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('comments', null, {});
  },
};