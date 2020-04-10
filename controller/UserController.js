const bcrypt = require('bcrypt');
const keys = require('../keys/index');
const { User } = require('../database/sequelize');
const token = require('../middleware/authentication');

const UserController = {}

UserController.getUsers = async (req, res, next) => {
    const users = await User.findAll({
        where: {
            id: 3
        }
    });
    res.status(200).json(users);
}

UserController.create = async (req, res, next) => {
    const password = await bcrypt.hash(req.body.password, keys.salts_roounds);
    const newUser = await User.create({
        name: req.body.name,
        password
    });
    console.log(newUser);
    let responseToken = token.generate(req.body);
    res.status(201).json({
        messaje: 'User created',
        responseToken
    });
}

module.exports = UserController;