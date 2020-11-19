var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var taskRouter = require('./routes/tasks');
var userRouter = require('./routes/users');
var employeRouter = require('./routes/employes');
var restaurantRouter = require('./routes/restaurent')
require('./dbconnection/connection');
var app = express();
var cors = require('cors');


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/',taskRouter);
// app.use('/',userRouter);
// app.use('/',employeRouter);
app.use('/',restaurantRouter)

module.exports = app;
