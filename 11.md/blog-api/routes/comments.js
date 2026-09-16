const router = require('express').Router();
const ctrl = require('../controllers/commentController');

router.get('/', ctrl.index);            // danh sách tất cả comment
router.get('/:id/user', ctrl.showUser); // user đã viết comment đó

module.exports = router;
