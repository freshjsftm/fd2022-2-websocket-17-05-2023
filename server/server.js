const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { Message } = require('./models');
const { SOCKET_EVENTS } = require('./configs');

const httpServer = http.createServer(app);
/************ WS *****************/
const io = new Server(httpServer, {
  transports: ['websocket'],
  cors: {
    origin: 'http://localhost:5000',
  },
});

io.on('connection', (socket) => {
  console.log('connection to socket');
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (message) => {
    console.log('message ===>>>', message);
    try {
      const savedMessage = await Message.create(message);
      if (!savedMessage) {
        throw new Error('Bad message!');
      }
      const messageWithAuthor = await Message.findById(savedMessage._id).populate('author');
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, messageWithAuthor);
    } catch (error) {
      socket.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });
  socket.on('disconect', (reason) => {
    console.log('reason ===>>>', reason);
  });
});
/************* WS ****************/
const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log('server started at port = ' + port);
});
