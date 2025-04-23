var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({username: username})
      .then(function (user){
        if (err) {return done(err);}
        if (!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }
        if (!user.validPassword(password)) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
      })
      .catch(function(err){
        return done(err)
      })
    }))

var indexRouter = require('./routes/index');
var mydataRouter = require('./routes/mydata');
var usersRouter = require('./routes/users');
var computationRouter = require('./routes/computation');
var Instrument = require('./models/instruments');
var resourceRouter = require('./routes/resource');
var instrumentRouter = require('./routes/instruments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mydata', mydataRouter);
app.use('/users', usersRouter);
app.use('/computation', computationRouter);
app.use('/resource', resourceRouter);
app.use('/instruments', instrumentRouter);

// passport config
// Use existing connection
// The Account model
var Account = require('./models/account');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

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
	
	let instance1 = new Instrument({name:"Flute", type:"Woodwind", year:1000});
	let instance2 = new Instrument({name:"Guitar", type:"Strings", year:1500});
	let instance3 = new Instrument({name:"Clarinet", type:"Woodwind", year: 1580});

	instance1.save() .then(doc=>{console.log("First object saved")}).catch(err=>{console.error(errP)});
	instance2.save() .then(doc=>{console.log("Second object saved")}).catch(err=>{console.error(errP)});
	instance3.save() .then(doc=>{console.log("Third object saved")}).catch(err=>{console.error(errP)});
}

let reseed = true;
if (reseed) {recreateDB();}
