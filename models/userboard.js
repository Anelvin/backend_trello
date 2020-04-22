'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBoard = sequelize.define('UserBoard', {
    BoardId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {});
  UserBoard.associate = function(models) {
    // associations can be defined here
    UserBoard.belongsTo(models.Board);
    UserBoard.belongsTo(models.User);
    UserBoard.belongsTo(models.Role);
  };
  return UserBoard;
};