'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hash = await bcrypt.hash('password123', 10);
    const now = new Date();

    await queryInterface.bulkInsert('users', [
      { id: 1, name: 'Nguyen Van A', age: 24, email: 'a@example.com',
        password: hash, birthday: new Date('2002-03-15'), status: 1,
        created_at: now, updated_at: now },
      { id: 2, name: 'Tran Thi B', age: 28, email: 'b@example.com',
        password: hash, birthday: new Date('1998-07-02'), status: 1,
        created_at: now, updated_at: now },
      { id: 3, name: 'Le Van C', age: 31, email: 'c@example.com',
        password: hash, birthday: new Date('1995-11-20'), status: 0,
        created_at: now, updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};