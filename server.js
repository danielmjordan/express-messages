const express = require('express');
const app = express();
const Message = require('./db/Message');
const bodyParser = require('body-parser');
const PORT = 3000;
let id;

app.use(bodyParser);

// create a message
app.post('Message/messages', (req, res) => {
  res.send('Post a message to the DB here');
})

// get all messages
app.get('Message/messages', (req, res) => {
  res.send('Retrieve messages here');
})

// get one message
app.get(`Message/messages/${id}`, (req, res) => {
  res.send('Return single message from here')
})

// update a message
app.put(`Message/messages/${id}`, (req, res) => {
  res.send('Updating existing message needs to happen here')
})

// delete a message
app.delete(`Message/messages${id}`, (req, res) => {
  res.send('Delete request made here')
})


// catch all route (I think?)
app.use((req, res, next) => {
  res.status(404).send('That route does not exist');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
