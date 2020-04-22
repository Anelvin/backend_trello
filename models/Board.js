'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
    Board.hasMany(models.UserBoard);
    Board.hasMany(models.TaskList);
  };
  return Board;
};