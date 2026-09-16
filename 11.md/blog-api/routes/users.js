const router = require('express').Router();
const ctrl = require('../controllers/userController');

router.get('/create', ctrl.createForm);   // form tạo user — khai báo TRƯỚC /:id
router.post('/', ctrl.store);             // xử lý submit form
router.get('/', ctrl.index);              // danh sách user
router.get('/:id', ctrl.show);            // chi tiết user (profile+posts+comments)
router.get('/:id/posts', ctrl.posts);     // danh sách post của user
router.get('/:id/comments', ctrl.comments); // danh sách comment của user

module.exports = router;