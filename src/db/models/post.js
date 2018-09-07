'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
       type: DataTypes.INTEGER,
       allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
  });
  Post.hasMany(models.Comment, {
    foreignKey: "postId",
    as: "comments"
  });
  };
  return Post;
};
