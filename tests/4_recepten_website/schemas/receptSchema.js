var mongoose = require('mongoose');
Schema = mongoose.Schema;

var localConnection = mongoose.createConnection('mongodb://localhost/research_test_3_recepten');

var receptSchema = new Schema({
    name: String,
    createdBy: String,
    minutesToPrepare: Number,
    accessories: [String],
    ingredients: [{
        name: String,
        amount: Number,
        unit: String,
    }],
    steps: [{
        title: String,
        body: String,
    }],
    softdelete: Boolean,
}, {
  timestamps: true
});

var recept = localConnection.model('recept', receptSchema);

module.exports = {
    recept: recept
};