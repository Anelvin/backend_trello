module.exports = (sequelize, type) => {
    const TaskList = sequelize.define('task_list', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        board_id: {
            type: type.INTEGER,
            references:{
                model: 'boards',
                key: 'id'
            }
        }
    },{
        timestamps: true
    });
   
    return TaskList;
}