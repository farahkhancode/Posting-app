const sequelize = require("../../src/db/models/index").sequelize;
 const User = require("../../src/db/models").User;


describe("User", () => {

  beforeEach((done) => {
// #1
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });

  describe("#create()", () => {

// #2
    it("should create a User object with a username", (done) => {
      User.create({
        username: "spiderman"
      })
      .then((user) => {
        expect(user.username).toBe("spiderman");
        expect(user.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

//
    it("should not create a user with a username already taken", (done) => {

// #5
      User.create({
        username: "batman"
      })
      .then((user) => {

        User.create({
          username: "batman"
        })
        .then((user) => {

          // the code in this block will not be evaluated since the validation error
          // will skip it. Instead, we'll catch the error in the catch block below
          // and set the expectations there

          done();
        })
        .catch((err) => {
          expect(err.message).toContain("Validation error");
          done();
        });

        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

});
