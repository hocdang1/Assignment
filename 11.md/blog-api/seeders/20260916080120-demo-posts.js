'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id, email FROM users WHERE email IN ('a@example.com', 'b@example.com', 'c@example.com')`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const idByEmail = Object.fromEntries(users.map((u) => [u.email, u.id]));

    await queryInterface.bulkInsert('posts', [
      {
        content: 'Bai viet dau tien cua Nguyen Van A ve Node.js',
        user_id: idByEmail['a@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: 'Chia se kinh nghiem hoc Sequelize',
        user_id: idByEmail['a@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: 'Tran Thi B gioi thieu ve Express',
        user_id: idByEmail['b@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        content: 'Le Van C: MySQL vs PostgreSQL',
        user_id: idByEmail['c@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
