const Sequelize = require('sequelize');

const UserModel = require('../models/User');

const db_url = 'mysql://root@localhost:3306/trello';

const sequelize = new Sequelize(db_url);

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Database connected!!!');
    });

module.exports = {
    User
}