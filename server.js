require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const auth = require('./utils/auth');

passport.use(new LocalStrategy(auth.verify));
passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zacdb");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/public"));
}

const sessConfig = {
	secret: process.env.SESS_SECRET || 'keyboard cat',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
		mongooseConnection: mongoose.connection
	}),
	cookie: {
		path: '/',
		httpOnly: false,
		maxAge: 5 * 60 * 1000
	}
}

if (process.env.NODE_ENV === 'production') {
	app.set('trust proxy', 1);
	sessConfig.cookie.secure = true;
}

app.use(session(sessConfig));
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use('/',routes);



// Start the API server

if (process.env.NODE_ENV === 'production') {
	app.use(express.static( './client/build'));

	app.get('*', () => () => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path
	});
}

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});