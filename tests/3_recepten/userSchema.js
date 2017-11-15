var mongoose = require('mongoose');
Schema = mongoose.Schema;

var localConnection = mongoose.createConnection('mongodb://localhost/research_test_2_user');

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

var user = localConnection.model('user', userSchema);

module.exports = {
    user: user
};