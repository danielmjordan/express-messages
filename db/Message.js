//this code includes mongoose in our project and creates connection to locally running mongodb database
const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection: error'));
db.once('open', () => {
  console.log('messages db up and running');
})

//build schema here - message table holds message
const MessageSchema = new mongoose.Schema({
  id: Number,
  username: String,
  content: String
})

//Message Model -- exported from file
const Message = mongoose.model('Message', MessageSchema);

const sampleMessage = new Message({
  username: 'daniel',
  content: 'This is where the text goes'
})

console.log(sampleMessage);


module.exports = Message;
