const express = require('express');
const { upload } = require('../middleware/upload');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', upload.single('image'), userController.createUser);

module.exports = router;
