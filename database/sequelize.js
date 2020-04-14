import Sequelize from 'sequelize';

//Importing models
import UserModel from '../models/User';
import TaskListModel from '../models/TaskList';
import BoardModel from '../models/Board';
import RoleModel from '../models/Role';
import RoleUserModel from '../models/RoleUser';
import TaskModel from '../models/Task';
import SubTaskModel from '../models/SubTask';
import ItemSubTaskModel from '../models/ItemSubTask';

const db_url = 'mysql://root@localhost:3306/trello';
const sequelize = new Sequelize(db_url);

export const User = UserModel(sequelize, Sequelize);
export const TaskList = TaskListModel(sequelize, Sequelize); 
export const Board = BoardModel(sequelize, Sequelize);
export const Role = RoleModel(sequelize, Sequelize);
export const RoleUser = RoleUserModel(sequelize, Sequelize);
export const Task = TaskModel(sequelize, Sequelize);
export const SubTask = SubTaskModel(sequelize, Sequelize);
export const ItemSubTask = ItemSubTaskModel(sequelize, Sequelize);

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
    
