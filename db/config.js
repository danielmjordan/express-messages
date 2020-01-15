//this code includes mongoose in our project and creates connection to locally running mongodb database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.once('open', () => console.log('Connected to Mongoose'));
db.on('error', (err) => console.log(err));
//build schema here - message table holds message


module.exports = db;
