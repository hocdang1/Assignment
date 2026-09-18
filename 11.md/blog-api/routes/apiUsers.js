const router = require('express').Router();
const ctrl = require('../controllers/userController');

router.post('/', ctrl.create);      // tạo user (dùng bởi modal Create trên trang danh sách)
router.put('/:id', ctrl.update);    // sửa user (dùng bởi modal Edit)
router.delete('/:id', ctrl.remove); // xóa user

module.exports = router;
