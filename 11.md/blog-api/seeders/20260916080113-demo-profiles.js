'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id, email FROM users WHERE email IN ('a@example.com', 'b@example.com', 'c@example.com')`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const idByEmail = Object.fromEntries(users.map((u) => [u.email, u.id]));

    await queryInterface.bulkInsert('profiles', [
      {
        address: '123 Le Loi, Q1',
        tel: '0901111111',
        province: 'TP.HCM',
        user_id: idByEmail['a@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: '45 Tran Phu, Q5',
        tel: '0902222222',
        province: 'TP.HCM',
        user_id: idByEmail['b@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        address: '9 Nguyen Trai, Hai Chau',
        tel: '0903333333',
        province: 'Da Nang',
        user_id: idByEmail['c@example.com'],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('profiles', null, {});
  },
};
