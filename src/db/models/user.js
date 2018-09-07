'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: {
     type: DataTypes.STRING,
     allowNull: false
   }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post, {
        foreignKey: "userId",
        as: "posts"
      });
      User.hasMany(models.Comment, {
    foreignKey: "userId",
    as: "comments"
  });

    // associations can be defined here
  };
  return User;
};
