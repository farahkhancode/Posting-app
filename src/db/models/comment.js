'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    body: {
     type: DataTypes.STRING,
     allowNull: false
   },
   postId: {
     type: DataTypes.INTEGER,
     allowNull: false
   },
   userId: {
     type: DataTypes.INTEGER,
     allowNull: false
   }
  }, {});
  Comment.associate = function(models) {

    Comment.belongsTo(models.Post, {
        foreignKey: "postId",
        onDelete: "CASCADE"
      });  // associations can be defined here
  };
  return Comment;
};
