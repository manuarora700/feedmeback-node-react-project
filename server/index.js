const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');


// Mongoose connecting to MongoDB

mongoose.connect(keys.mongoURI);

// Node doesnt have support for es2015 syntax
// import express from 'express'
// This doesnt work
// React side of things may use import statement. It does work there.

// express application
const app = express();

// Handle cookies
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// Above statement same as
// const authRoutes = require(./routes/authRoutes);
// authRoutes(app);



// Run on localhost:5000/
// app.listen(5000);
// Dynamic port binding for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);