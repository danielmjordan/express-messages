const express = require('express');
const app = express();
const db = require('./db/config')
const Message = require('./db/Message');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

// create a message
app.post('/messages', (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save()
    .then((results) => res.status(200).send(results))
})

// get all messages
app.get('/messages', (req, res) => {
  Message.find()
  .then((messages) => res.send(messages))
  .catch(err => err)
})

// get one message
app.get('/messages/:id', (req, res) => {
  const id = req.params.id;
  Message.findById(id)
    .then((message) => res.status(200).send(message))
    .catch(err => err);
})

// update an existing message
app.put('/messages/:id', (req, res) => {
  const id = req.params.id;
  const updatedMessage = req.body;
  Message.findByIdAndUpdate(id, updatedMessage)
    .then(() => res.status(200).send('updated message'))
    .catch(err => err);
})

// delete a message
app.delete('/messages/:id', (req, res) => {
  const id = req.params.id;
  Message.findByIdAndDelete(id)
    .then((message) => res.status(200).send(message))
    .catch(err => res.status(404).send(err));
})

// catch all route (I think?)
app.use((req, res, next) => {
  res.status(404).send('That route does not exist');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
