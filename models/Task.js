module.exports = (sequelize, type) => {
    const Task = sequelize.define('task', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_list_id: {
            type: type.INTEGER,
            references: {
                model: 'task_lists',
                key: 'id'
            }
        },
        name: type.STRING,
        description: type.STRING
    },{
        timestamps: true
    });
    return Task;
}