/* Dependencies inladen */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var async = require('async');

var papiermandSchema = require('../schemas/papiermandSchema').papiermand;

exports.getAll = function(next){
    papiermandSchema.find({}, {_id:0, location:1, straatnaam:1, huisnummer:1, postcode:1, opmerking:1, uniek_nummer_papiermand:1}, function(err, papiermanden){
        if (err) console.log(err);
        next(papiermanden);
    });
}