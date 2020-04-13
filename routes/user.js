const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const token = require('../middleware/authentication');

router.get('/', token.verifyToken, UserController.getUsers);
router.post('/create', UserController.create);
router.post('/signin', UserController.signIn);

module.exports = router;