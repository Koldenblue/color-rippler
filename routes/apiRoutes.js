const router = require("express").Router();
const axios = require("axios");
const db = require("../models")
const passport = require("../config/passport");
// require("dotenv").config();

router.get('/colorgetter', (req, res) => {
    let queryUrl = 'http://thecolorapi.com/scheme?rgb=' + "222,32,52"
    axios.get(queryUrl).then(data => {
      res.json(data.data.data)
    })
    // res.json(data)
})

router.post('/login', passport.authenticate("local"), (req, res) => {

  let response = {
    username: req.user.username,
    id: req.user._id,
  }
  res.json(response);
})

router.put('/save/:userId/:slot', (req, res) => {
  // req.body is the color grid array
  let slot = req.params.slot - 1;
  console.log(slot)
  db.User.findById(req.params.userId).then((doc) => {
    doc['grids'].splice(slot, 1, req.body);
    doc.save();
  })
  res.json({})
})

router.get('/load/:userId/:slot', (req, res) => {
  let slot = req.params.slot - 1;
  db.User.findById(req.params.userId).then((doc) => {
    let loadedGrid = doc.grids[slot];
    res.json(loadedGrid)
  })
})

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
    db.User.findById(user._id).then(userData => {
      // separate the password from the rest of the data, and respond with data
      const { password, ...data } = userData._doc;
      return res.json(data).end();
    }).catch(err=> console.error(err))
  } else {
    res.json(null)
  }
})

module.exports = router;
