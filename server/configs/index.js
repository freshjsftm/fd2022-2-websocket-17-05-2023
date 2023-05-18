module.exports = {
  mongo: {
    development: {
      host: 'localhost',
      port: 27017,
      dbName: 'fd_chat',
    },
    test: {
      host: 'localhost',
      port: 27017,
      dbName: 'fd_chat_test',
    },
    production: {},
  },
  SOCKET_EVENTS:{
    NEW_MESSAGE: 'NEW_MESSAGE',
    NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR',
  }
};
