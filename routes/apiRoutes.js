const router = require("express").Router();
const axios = require("axios");
const db = require("../models")
const passport = require("../config/passport");
// require("dotenv").config();

router.get('/colorgetter', (req, res) => {
    let data = {hi: 'hi'}
    res.json(data)
})

router.post('/login', passport.authenticate("local"), (req, res) => {

  let response = {
    username: req.user.username,
    id: req.user._id,
  }
  res.json(response);
})

router.put('/save/:userId/:slot', (req, res) => {
  // console.log(req.body) // req.body is the color grid array
  console.log(req.params.slot)
  console.log(req.params.userId)
  res.json({})
})
// router.get('/users', (req, res) => {
//   console.log("users api get route, now validate, go thru passport, and put in database");
//   db.User.find({}).then(data => {
//     res.json(data)
//   }).catch((err) => {
//     console.log(err);
//   })
// })

router.post('/users', (req, res) => {
	db.User.create(req.body).then((data) => {
		res.status(200).end();
	}).catch((err) => {
		try {
			err.errors.password.properties.message === "Password must be at least 6 characters." ? res.json(err.errors.password.properties.message) : null;
		}
		catch (undefErr) {
			if (err.code) {
				err.code === 11000 ? res.json("That username already exists!") : null;
			}
		}
	})
})

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).end();
})


router.get("/userdata", (req, res) => {
  let user = req.user;
  // console.log(req)
  console.log('apiRoutes.js', user)
  if (user) {
    db.User.findById(user._id)
      .then(userData => {
        // separate the password from the rest of the data, and respond with data
        const { password, ...data } = userData._doc;
        return res.json(data).end()
      }
      ).catch(err=> console.log(err))
  } else {
    res.json(null)
  }
})

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