const commentQueries = require("../db/queries.comments.js");
const session = require("express-session");
const flash = require("express-flash");


module.exports = {
  create(req, res, next){

      let newComment = {
        body: req.body.body,
        userId: req.user.id,
        postId: req.params.postId
      };

 // #4
      commentQueries.createComment(newComment, (err, comment) => {
 // #5
        if(err){
          console.log(err);
          req.flash("error", err);
          res.redirect(req.headers.referer);
          } else {
            res.redirect(303, `/posts/${post.id}`);
            }
      });
  },

// #6
  destroy(req, res, next){
    commentQueries.deleteComment(req, (err, comment) => {
      if(err){
        res.redirect(err, req.headers.referer);
      } else {
        res.redirect(req.headers.referer);
      }
    });
  }

}
