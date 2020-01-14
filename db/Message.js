const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  name: String,
  content: String
})

//Need a function that takes in a message object, and saves the object in the DB
// MessageSchema.methods.storeMessage = (message) => {
//   let instance = new Message(message);
//   return instance;
// }

//Message Model -- exported from file
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
