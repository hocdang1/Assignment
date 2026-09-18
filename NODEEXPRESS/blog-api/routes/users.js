const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//create PHẢI đặt trước /:id
router.get('/create', userController.createForm);

router.get('/', userController.index);
router.post('/', userController.store);

router.get('/:id', userController.show);
router.get('/:id/posts', userController.posts);
router.get('/:id/comments', userController.comments);

module.exports = router;