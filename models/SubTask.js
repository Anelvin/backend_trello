module.exports = (sequelize, type) => {
    const SubTask = sequelize.define('sub_task', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_id: {
            type: type.INTEGER,
            references: {
                model: 'tasks',
                key: 'id'
            }
        },
        name: type.STRING,
        progress: type.STRING
    },{
        timestamps: true
    });
    return SubTask;
}