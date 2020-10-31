const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const HASH_TIMES = 10;

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 6, "Password must be at least 6 characters."]
    }
});

userSchema.pre("save", function(){
   return bcrypt.hash(this.password, HASH_TIMES).then(hash=> {
        this.password = hash;
    })
});


userSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;
