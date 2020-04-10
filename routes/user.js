const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/', (req, res, next) => {
    res.status(200).send('Hola Usuario');
});

router.post('/create', UserController.create);

module.exports = router;