var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var express = require('express');
var app = express();
var path = require('path');

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));

var recept = require('./schemas/receptSchema').recept;

app.get('/', function (req, res) {
    recepten = recept.find({}, {name:1}, function(err, recepten){
        if (err) console.log(err);
        res.render(recepten, {recepten: recepten});
    });
});

app.get('/detail/:id', function (req, res) {
    recept = recept.find({_id: mongoose.Types.ObjectId(req.params.id)}, {}, function(err, recept){
        if (err) console.log(err);
        res.json(recept);
    });
});

app.listen(3000);