var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var recept = require('./schemas/receptSchema').recept;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get('/', function(req, res, next) {
  recept.find({}, {name:1}, function(err, recepten){
    if (err) console.log(err);
    res.render('index', {recepten: recepten});
  });
});

/* GET recept detail */
app.get('/detail/:id', function (req, res) {
  recept.findOne({_id: mongoose.Types.ObjectId(req.params.id)}, {}, function(err, recept){
      if (err) console.log(err);
      res.render('detail', {recept: recept});
  });
});

/* new recipe */
//hiermee kan de user een nieuw recept aanmaken, dat in de database komt en achteraf te bekijken is. Ezpz!
app.post('/newrecipe', function (req, res) {
  var newrecept = new recept(req.body);
  newrecept.save(function (err) {
      if (err) {
          console.log(err);
          res.redirect('/');
      } else {
          console.log('meow');
          res.redirect('/');
      }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
