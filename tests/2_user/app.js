var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var user = require('./schemas/userSchema').user;

console.log("done");