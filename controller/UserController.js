const bcrypt = require('bcrypt');
const keys = require('../keys/index');
const { User } = require('../database/sequelize');

const UserController = {}

UserController.create = async (req, res, next) => {
    const password = await bcrypt.hash(req.body.password, keys.salts_roounds);
    const newUser = await User.create({
        name: req.body.name,
        password
    });
    res.status(201).json({
        messaje: 'User created',
        newUser
    });
}

module.exports = UserController;