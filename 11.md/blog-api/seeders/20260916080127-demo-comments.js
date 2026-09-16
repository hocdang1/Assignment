'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id, email FROM users WHERE email IN ('a@example.com', 'b@example.com', 'c@example.com')`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const idByEmail = Object.fromEntries(users.map((u) => [u.email, u.id]));

    const posts = await queryInterface.sequelize.query(
      `SELECT id FROM posts ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('comments', [
      {
        content: 'Bai viet hay qua!',
        post_id: posts[0].id,
        user_id: idByEmail['b@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: 'Cam on ban da chia se',
        post_id: posts[0].id,
        user_id: idByEmail['c@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: 'Minh cung dang hoc cai nay',
        post_id: posts[2].id,
        user_id: idByEmail['a@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('comments', null, {});
  },
};
