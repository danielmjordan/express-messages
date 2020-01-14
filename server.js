const express = require('express');
const app = express();
const db = require('./db/config')
const Message = require('./db/Message');
const bodyParser = require('body-parser');
const PORT = 3000;
let id;

app.use(bodyParser.json());

// create a message
app.post('/messages', (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save()
    .then((results) => res.status(200).send(results))
})

// get all messages
app.get('/messages', (req, res) => {
  Message.find((err, messages) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(messages);
  })
})

// get one message
app.get(`/messages/${id}`, (req, res) => {
  //findbyID
  res.send('Return single message from here')
})

// update a message
app.put(`/messages/${id}`, (req, res) => {
  res.send('Updating existing message needs to happen here')
})

// delete a message
app.delete(`/messages${id}`, (req, res) => {
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
