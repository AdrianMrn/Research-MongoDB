var mongoose = require('mongoose');
Schema = mongoose.Schema;

var localConnection = mongoose.createConnection('mongodb://localhost/research_test_5_geospatial');

var papiermandSchema = new Schema({
    opendata_id: {type: Number, index: true},
    location: { type: [Number], index: '2dsphere' },
    straatnaam: String,
    huisnummer: String,
    postcode: Number,
    opmerking: String,
    uniek_nummer_papiermand: Number
});

var papiermand = localConnection.model('papiermand', papiermandSchema);

module.exports = {
    papiermand: papiermand
};