'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskList = sequelize.define('TaskList', {
    name: DataTypes.STRING,
    BoardId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  TaskList.associate = function(models) {
    // associations can be defined here
    TaskList.belongsTo(models.Board);
    TaskList.hasMany(models.SubTaskList);
  };
  return TaskList;
};