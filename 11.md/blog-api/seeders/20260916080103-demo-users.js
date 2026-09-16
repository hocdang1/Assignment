'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Nguyen Van A',
        age: 24,
        email: 'a@example.com',
        password: 'password123',
        birthday: new Date('2001-05-10'),
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tran Thi B',
        age: 28,
        email: 'b@example.com',
        password: 'password123',
        birthday: new Date('1997-03-22'),
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Le Van C',
        age: 31,
        email: 'c@example.com',
        password: 'password123',
        birthday: new Date('1994-11-08'),
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', {
      email: ['a@example.com', 'b@example.com', 'c@example.com'],
    }, {});
  },
};
