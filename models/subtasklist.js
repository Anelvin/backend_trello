'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubTaskList = sequelize.define('SubTaskList', {
    description: DataTypes.STRING,
    TaskListId: DataTypes.INTEGER,
    percentage: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  SubTaskList.associate = function(models) {
    // associations can be defined here
    SubTaskList.belongsTo(models.Task);
    SubTaskList.hasMany(models.ItemSubTaskList);
  };
  return SubTaskList;
};