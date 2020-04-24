'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    description: DataTypes.STRING,
    ColorId: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};