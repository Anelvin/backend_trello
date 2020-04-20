import bcrypt from 'bcrypt';
import keys from '../keys/index';
import { User } from '../database/sequelize';
import token from '../middleware/authentication';

const UserController = {}

UserController.getUsers = async (req, res, next) => {
    const users = await User.findAll();
    return res.status(200).json(users);
}

UserController.create = async (req, res, next) => {
    const password = await bcrypt.hash(req.body.password, keys.salts_rounds);
    const newUser = await User.create({
        name: req.body.email,
        password
    });
    let responseToken = token.generate(newUser);
    res.status(201).json({
        message: 'User created',
        responseToken
    });
}

UserController.signIn = async (req, res, next) => {
    const user = await User.findOne({
        where:{
            name: req.body.email
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