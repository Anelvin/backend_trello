'use strict';
module.exports = (sequelize, DataTypes) => {
  const Background = sequelize.define('Background', {
    description: DataTypes.STRING
  }, {});
  Background.associate = function(models) {
    // associations can be defined here
    Background.hasMany(models.Board);
  };
  return Background;
};