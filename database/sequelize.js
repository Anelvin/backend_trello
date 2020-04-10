const Sequelize = require('sequelize');

//Importing models
const UserModel = require('../models/User');
const TaskListModel = require('../models/TaskList');
const BoardModel = require('../models/Board');
const RoleModel = require('../models/Role');
const RoleUserModel = require('../models/RoleUser');
const TaskModel = require('../models/Task');
const SubTaskModel = require('../models/SubTask');
const ItemSubTaskModel = require('../models/ItemSubTask');

const db_url = 'mysql://root@localhost:3306/trello';
const sequelize = new Sequelize(db_url);

const User = UserModel(sequelize, Sequelize);
const TaskList = TaskListModel(sequelize, Sequelize); 
const Board = BoardModel(sequelize, Sequelize);
const Role = RoleModel(sequelize, Sequelize);
const RoleUser = RoleUserModel(sequelize, Sequelize);
const Task = TaskModel(sequelize, Sequelize);
const SubTask = SubTaskModel(sequelize, Sequelize);
const ItemSubTask = ItemSubTaskModel(sequelize, Sequelize);

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
    Board,
    Role,
    RoleUser,
    Task,
    SubTask,
    ItemSubTask
}