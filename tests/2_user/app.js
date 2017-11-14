var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var user = require('./schemas/userSchema').user;

var newuser = new user({
    name: "Adriaan",
    email: "adriaanmarain300@gmail.com",
    password: "hunter112",
});

newuser.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});