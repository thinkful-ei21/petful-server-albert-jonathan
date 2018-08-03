'use strict';

const express = require('express');
const router = express();

const dogDb = require('../db/dog-db.js');
const {peek} = require('../models/queue.js');

// GET (read) the first item in database
router.get('/', (req, res, next) => {
  if (dogDb.first) {
    const dog = peek(dogDb);
    res.json(dog);
  } else {
    const err = new Error();
    err.message = 'All dogs have a home!';
    err.status = 400;
    next(err);
  }
});

// DELETE (remove) the first item in database
router.delete('/', (req, res, next) => {
  if (dogDb.first) {
    dogDb.dequeue();
    res.sendStatus(204).end();
  } else {
    const err = new Error();
    err.message = 'All dogs have a home!';
    err.status = 400;
    next(err);
  }
});

module.exports = router;
