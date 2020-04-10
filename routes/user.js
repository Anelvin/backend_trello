const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/', UserController.getUsers);
router.post('/create', UserController.create);
router.post('/signin', UserController.signIn);

module.exports = router;