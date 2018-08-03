'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config.js');
const { dbConnect } = require('./db-mongoose');
// const { dbConnect } = require('./db-knex');

// Routers for cats and dogs
const catsRouter = require('./routes/cats.js');
const dogsRouter = require('./routes/dogs.js');

const app = express();

// Log all requests. Skip logging during
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
  skip: (req, res) => process.env.NODE_ENV === 'test'
}));

// Cross origin
app.use(cors({
  origin: CLIENT_ORIGIN
}));

// API endpoints
app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);

// Custom 404 Not Found route handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
