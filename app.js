var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mydataRouter = require('./routes/mydata');
var usersRouter = require('./routes/users');
var computationRouter = require('./routes/computation');
var Instrument = require('./models/instruments');
var resource = require('./routes/resource');
var instrumentRouter = require('./routes/instruments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mydata', mydataRouter);
app.use('/users', usersRouter);
app.use('/computation', computationRouter);
app.use('/resource', resource);
app.use('/instruments', instrumentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error.'));
db.once("open", function(){console.log("Connection to DB succeeded")});

async function recreateDB(){
	await Instrument.deleteMany();
	
	let instance1 = new Instrument({name:"Flute", type:"Woodwind", year:43000});

	instance1.save() .then(doc=>{console.log("First object saved")}).catch(err=>{console.error(errP)});
}

let reseed = true;
if (reseed) {recreateDB();}
