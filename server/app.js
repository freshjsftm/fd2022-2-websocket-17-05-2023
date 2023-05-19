const express = require('express');
const cors = require('cors');
const MessageController = require('./controllers/messages.controller');
const UserController = require('./controllers/user.controller');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', MessageController.getAllMessages);
app.post('/users',UserController.createUser);

app.use((err, req, res, next) => {
  console.log('err ====>', err);
  res.status(500).send(err);
});

module.exports = app;
