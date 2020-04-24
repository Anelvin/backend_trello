'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemSubTaskList = sequelize.define('ItemSubTaskList', {
    description: DataTypes.STRING,
    SubTaskListId: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN
  }, {});
  ItemSubTaskList.associate = function(models) {
    // associations can be defined here
    ItemSubTaskList.belongsTo(models.SubTaskList);
  };
  return ItemSubTaskList;
};