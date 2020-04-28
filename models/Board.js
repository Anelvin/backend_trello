'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    description: DataTypes.STRING,
    BackgroundId: DataTypes.INTEGER,
  }, {});
  Board.associate = function(models) {
    // associations can be defined here
    Board.hasMany(models.UserBoard);
    Board.hasMany(models.TaskList);
    Board.belongsTo(models.Background);
  };
  return Board;
};