const express = require('express');
const router = express.Router();
const userApi = require('../controllers/userApiController');

router.post('/', userApi.store);
router.put('/:id', userApi.update);
router.delete('/:id', userApi.destroy);

module.exports = router;
