
const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  content: String
})
//Message Model -- exported from file
const Message = mongoose.model('Message', MessageSchema);

//Need a function that takes in a message object, and saves the object in the DB
const storeMessage = (message) => {
  let instance = new Message(message);
  instance.save(instance);
  return instance;
}

console.log(storeMessage({ name: 'iub', content: 'sdiunb' }));

module.exports = Message
