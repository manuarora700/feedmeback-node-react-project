const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
// Node doesnt have support for es2015 syntax
// import express from 'express'
// This doesnt work
// React side of things may use import statement. It does work there.

// express application
const app = express();

// route handler -- associate with the given route
// Authentication route
// console.developers.google.com

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		console.log('access token--', accessToken);
		console.log('refresh token--', refreshToken);
		console.log('profile--', profile);

	})
);
// Route handler for google oauth
app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
})); 

app.get('/auth/google/callback', passport.authenticate('google'));
// Run on localhost:5000/
// app.listen(5000);
// Dynamic port binding for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);