'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    TaskListId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    index: DataTypes.INTEGER,
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.TaskList);
    Task.hasMany(models.SubTaskList);
  };
  return Task;
};