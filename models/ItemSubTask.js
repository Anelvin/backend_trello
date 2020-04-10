module.exports = (sequelize, type) => {
    const ItemSubTask = sequelize.define('item_sub_task', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sub_task_id: {
            type: type.INTEGER,
            references: {
                model:'sub_tasks',
                key: 'id'
            }
        },
        name: type.STRING,
        complete: type.BOOLEAN
    })
}