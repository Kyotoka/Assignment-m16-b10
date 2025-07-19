const express = require('express');
const router = express.Router();
const { getHandler, postHandler } = require('../controllers/testController');

router.get('/get', getHandler);
router.post('/post', postHandler);

module.exports = router;
