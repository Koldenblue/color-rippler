const router = require("express").Router();
const axios = require("axios");
const db = require("../models")
// const passport = require("../config/passport");
// require("dotenv").config();


// router.get('/users', (req, res) => {
//   console.log("users api get route, now validate, go thru passport, and put in database");
//   db.User.find({}).then(data => {
//     res.json(data)
//   }).catch((err) => {
//     console.log(err);
//   })
// })

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.status(200).end();
// })



// router.post('/users', (req, res) => {
//   db.User.create(req.body).then((data) => {
//     res.status(200).end();
//   }).catch((err) => {
//     try {
//       err.errors.password.properties.message === "Password must be at least 6 characters." ? res.json(err.errors.password.properties.message) : null;
//     }
//     catch (undefErr) {
//       if (err.code) {
//         err.code === 11000 ? res.json("That username already exists!") : null;
//       }
//     }
//   })
// })

// router.post('/login', passport.authenticate("local"), (req, res) => {
//   let response = {
//     username: req.user.username,
//     id: req.user._id,
//     homeAddress: req.user.homeAddress ? req.user.homeAddress : null
//   }
//   res.json(response);
// })

// router.get("/userdata", ({ user }, res) => {
//   if (user) {
//     // console.log(user._id)
//     db.User.findById(user._id)
//       .then(userData => {
//         // console.log("THIS IS IN USERDATA ROUTE ",userData)
//         const { password, ...data } = userData._doc;
//         return res.json(data).end()
//       }
//       ).catch(err=> console.log(err))
//   } else {
//     res.json(null)
//   }
// })


module.exports = router;




function removeSpaces(str) {
  if (str === null) {
      return;
  }
  str = str.trim();
  for (let i = 0; i < str.length; i++)
      if (str[i] === " ") {
          var leftStr = str.slice(0, i);
          var rightStr = str.slice(i + 1,);
          str = leftStr + "%20" + rightStr;
      }
  return str;
}