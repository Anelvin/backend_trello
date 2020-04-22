'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubTaskList = sequelize.define('SubTaskList', {
    name: DataTypes.STRING,
    TaskListId: DataTypes.INTEGER,
    percentage: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  SubTaskList.associate = function(models) {
    // associations can be defined here
    SubTaskList.belongsTo(models.TaskList);
    SubTaskList.hasMany(models.ItemSubTaskList);
  };
  return SubTaskList;
};