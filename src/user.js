const mongoose = require('mongoose');
// creating user model
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String
});
// User: represents the entire collection of user data
const User = mongoose.model('users', UserSchema);

// Will create a reference of the User model
module.exports = User;

