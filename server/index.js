const express = require('express')
// Node doesnt have support for es2015 syntax
// import express from 'express'
// This doesnt work
// React side of things may use import statement. It does work there.

// express application
const app = express();

// route handler -- associate with the given route
app.get('/', (req, res) => {
	res.send({ bye: 'Buddy' });
});

// Run on localhost:5000/
// app.listen(5000);
// Dynamic port binding for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);