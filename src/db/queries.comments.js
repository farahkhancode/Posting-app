const Comment = require("./models").Comment;
const Post = require("./models").Post;
const User = require("./models").User;


module.exports = {

  createComment(newComment, callback){
    return Comment.create({
       body: newComment.body,
       userId: newComment.userId,
       postId: newComment.postId
     })
    .then((comment)=> {
      callback(null, comment);
    })
    .catch ((err) => {
      callback(err);
    });
  },




  deleteComment(req, callback){
    return Comment.findById(req.params.id)
    .then ((comment) => {
       comment.destroy();
       callback(null, comment);
    })
    .catch ((err) => {
      callback(err);
    });
  }


}
