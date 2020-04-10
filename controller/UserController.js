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
    let responseToken = token.generate(newUser);
    res.status(201).json({
        messaje: 'User created',
        responseToken
    });
}

UserController.signIn = async (req, res, next) => {
    const user = await User.findOne({
        where:{
            name: req.body.name
        }
    });
    if(user){
        const authorized = await bcrypt.compare(req.body.password, user.password);
        if(authorized){
            let responseToken = token.generate(user);
            res.status(200).json({
                token: responseToken
            });
        }
        res.status(401);
    }
    res.status(401);
}

module.exports = UserController;