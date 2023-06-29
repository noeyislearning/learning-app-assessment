#!/usr/bin/env node

const http = require('http');
const mongoose = require('mongoose');

const config = require('../config');
const App = require('../app');

async function connectToMongooes() {
  return mongoose.connect(
    config.mongodb.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true -> This is not supported anymore.
    }
  );
}

/* Logic to start the application */
const app = App(config);
const port = process.env.PORT || '3000';
app.set('port', port);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port  ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const server = http.createServer(app);
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;

  console.info(`Shopper listening on ${bind}`);
  console.log("*************************\n");
}
server.on('error', onError);
server.on('listening', onListening);

connectToMongooes()
  .then(
    () => {
      console.log("*************************");
      console.log('Conneting to MongoDB: mongodb://localhost:37017/shopper');
      console.info('Sucessfully connected to MongoDB.');
      server.listen(port);
    }
  )
  .catch((error) => {
    console.error(error);
  })