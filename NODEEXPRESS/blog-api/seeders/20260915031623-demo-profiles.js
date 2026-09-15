'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('profiles', [
      { id: 1, address: '123 Le Duan', tel: '0905123456',
        province: 'Da Nang', user_id: 1, created_at: now, updated_at: now },
      { id: 2, address: '45 Nguyen Hue', tel: '0912345678',
        province: 'Ho Chi Minh', user_id: 2, created_at: now, updated_at: now },
      { id: 3, address: '7 Trang Tien', tel: '0987654321',
        province: 'Ha Noi', user_id: 3, created_at: now, updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('profiles', null, {});
  },
};