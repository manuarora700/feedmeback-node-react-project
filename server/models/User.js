const mongoose = require('mongoose');

// const Schema = mongoose.Schema; -- Below code is using destructuring
const { Schema } = mongoose;

// Describe what individual record looks like

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);

