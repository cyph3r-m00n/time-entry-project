var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    isAdmin: Boolean,
    activeEntryCount: Number,
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);