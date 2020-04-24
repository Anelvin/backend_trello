'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskList = sequelize.define('TaskList', {
    description: DataTypes.STRING,
    BoardId: DataTypes.INTEGER,
    index: DataTypes.INTEGER,
  }, {});
  TaskList.associate = function(models) {
    // associations can be defined here
    TaskList.belongsTo(models.Board);
    TaskList.hasMany(models.Task);
  };
  return TaskList;
};