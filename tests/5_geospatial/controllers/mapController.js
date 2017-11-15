/* Dependencies inladen */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var async = require('async');

var papiermandSchema = require('../schemas/papiermandSchema').papiermand;