const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.index);
router.get('/:id/user', commentController.user);

module.exports = router;
