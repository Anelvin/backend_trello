'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    description: DataTypes.STRING,
    background: DataTypes.STRING,
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
    Board.hasMany(models.UserBoard);
    Board.hasMany(models.TaskList);
  };
  return Board;
};