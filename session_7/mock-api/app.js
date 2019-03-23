var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var whitelist = [
  'http://192.168.200.200',
];
var cors = require('cors');
var corsOptions = {
  origin: function (origin, callback) {
    console.log("origin: " + origin);
    callback(null, true)
  }
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', cors(corsOptions), usersRouter);

module.exports = app;
