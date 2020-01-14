const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  name: String,
  content: String
})

//Message Model -- exported from file
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
