module.exports = (sequelize, type) => {
    const Board = sequelize.define('board', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
    },{
        timestamps: true
    });
    Board.associate = (models) => {
        Board.hasMany(models.task_list, {onDelete: 'cascade'})
    }
    return Board;
}