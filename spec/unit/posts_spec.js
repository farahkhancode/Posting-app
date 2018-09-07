const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;
const base = "http://localhost:3000/posts/";

describe ("Post", () =>{
   beforeEach((done) => {
     this.post;
     sequelize.sync({force: true}).then((res) => {
       Post.create({
         title: "Cheesecake Recipe",
         body:"cream cheese, eggs, sugar and vanilla"
      })
      .then((post) => {
        this.post = post;
        done();
      })
      .catch((err) =>{
        console.log(err);
        done();
        });
      });


   describe("#create()", () => {
     it("should create a post object with a title and body", (done) =>{
       Post.create({
         title: "Cheesecake Recipe",
         body: "cream cheese, eggs, sugar and vanilla"
       })
       .then((post) => {

//#2
         expect(post.title).toBe("Cheesecake Recipe");
         expect(post.body).toBe("cream cheese, eggs, sugar and vanilla");
         done();

       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });
   });

   it("should not create a post with missing title or body", (done) => {
      Post.create({
        title: "Cheesecake Recipe"
      })
      .then((post) => {

       // the code in this block will not be evaluated since the validation error
       // will skip it. Instead, we'll catch the error in the catch block below
       // and set the expectations there

        done();

      })
      .catch((err) => {

        expect(err.message).toContain("Post.body cannot be null");
        done();

      })
    });




  });
 });



     });
    });
