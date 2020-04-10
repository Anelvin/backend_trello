const Sequelize = require('sequelize');

const UserModel = require('../models/User');
const TaskListModel = require('../models/TaskList');
const BoardModel = require('../models/Board');

const db_url = 'mysql://root@localhost:3306/trello';

const sequelize = new Sequelize(db_url);

const User = UserModel(sequelize, Sequelize);
const TaskList = TaskListModel(sequelize, Sequelize); 
const Board = BoardModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Tables created');
    });

try {
    sequelize.authenticate();
    console.log('Connection has been established succesfully!!!');
} catch (error) {
    console.log('Unable to connect to the database:', error);
}
    
module.exports = {
    User,
    TaskList,
    Board
}