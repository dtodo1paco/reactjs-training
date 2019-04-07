var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.get('/ping', function (req, res) {
  return res.send('pong');
});
/*
app.get('/uploaded', function(req, res) {
  console.log("Serving uploaded resource: " + req.path)
  res.sendFile(path.join(__dirname, 'public', req.path));
});
*/
if (process.env.NODE_ENV === 'production') {
  console.log("This is serious! You are in production mode")
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', function(req, res) {
    console.log(req.path)
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
