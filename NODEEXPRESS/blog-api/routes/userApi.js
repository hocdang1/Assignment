const express = require('express');
const router = express.Router();
const userApi = require('../controllers/userApiController');

router.post('/', userApi.create);
router.put('/:id', userApi.update);
router.delete('/:id', userApi.remove);

module.exports = router;
