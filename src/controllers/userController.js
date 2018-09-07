const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash")

module.exports = {
  signUp(req, res, nex){
    res.render("users/signup");
  },

  create(req, res, next){
//#1
     let newUser = {
       username: req.body.username,
       password: req.body.password,
       passwordConfirmation: req.body.passwordConfirmation
     };
// #2
     userQueries.createUser(newUser, (err, user) => {
       if(err){
         console.log(newUser);
         req.flash("error", err);
         res.redirect("/users/signup");
       } else {

// #3
         passport.authenticate("local")(req, res, () => {
           res.redirect("/posts");
         })
       }
     });
   },

   signInForm(req, res, next){
     res.render("users/signin");
   },

   signIn(req, res, next){
    passport.authenticate("local")(req, res, function () {
      if(!req.user){
        req.flash("notice", "Sign in failed. Please try again.")
        res.redirect("/users/signin");
      } else {
        req.flash("notice", "You've successfully signed in!");
        res.redirect("/posts");
      }
    })
  },

  signOut(req, res, next){
    req.logout();
    req.flash("notice", "You've successfully signed out!");
    res.redirect("/");
  }
}
