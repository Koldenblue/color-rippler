let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/colorrippler", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let seeder =
{
  "username": "1",
  "password": "1",
}

db.User.deleteMany({})
  .then(() => db.User.insertMany(seeder))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
