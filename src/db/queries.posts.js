const Post = require("./models").Post;
const Comment = require("./models").Comment;
const User = require("./models").User;


module.exports = {

  getAllPosts(callback){
    return Post.all()
    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },


  addPost(newPost, callback){
     return Post.create({
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId
      })
     .then((post) => {
       callback(null, post);
     })
     .catch((err) => {
       callback(err);
     })
   },

   getPost(id, callback){
     return Post.findById(id, {
        include: [
          {model: Comment, as: "comments", include: [
            {model: User }
          ]}
        ]
      })
    .then((post) => {
      callback(null, post);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deletePost(id, callback){
    return Post.destroy({
      where:{id}
    })
    .then((post)=>{
      callback(null, post);
    })
    .catch((err)=>{
      callback(err);
    })
  },

//ask about this______________________
  updatePost(id, updatedPost, callback){
    return Post.findById(id)
    .then((post) => {
      if(!post){
        return callback("Post not found");
     }

    post.update(updatedPost, {
      fields: Object.keys(updatedPost)
      //can i replace this with title and body?
        })
        .then(() => {
          callback(null, post);
        })
        .catch((err) => {
          callback(err);
        });
    });
  }

}
