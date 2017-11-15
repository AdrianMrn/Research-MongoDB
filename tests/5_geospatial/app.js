require('dotenv').config()
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mapController = require('./controllers/mapController'); 

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

/* homepage */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Test 5_geospatial' });
});
/* all */
app.get('/all', function(req, res, next) {
  mapController.getAll(function(papiermanden){
    res.render('all', { title: 'Test 5_geospatial - All', papiermanden: papiermanden, apikey: process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY });
  });
});
/* near */
app.get('/near', function(req, res, next) {
  var papiermanden = [];
  if (req.query.lng && req.query.lat && req.query.rad) {
    mapController.getNear(req.query.lng, req.query.lat, req.query.rad, function(papiermanden){
      res.json(papiermanden);
    });
  } else {
    res.render('near', { title: 'Test 5_geospatial - Near', papiermanden: papiermanden, apikey: process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY });
  }
});
/* filter */
app.get('/filter', function(req, res, next) {
  res.render('filter', { title: 'Test 5_geospatial - Filter' });
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
