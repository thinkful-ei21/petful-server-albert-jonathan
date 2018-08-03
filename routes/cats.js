'use strict';

const express = require('express');
const router = express();

const catDb = require('../db/cat-db.js');
const { peek } = require('../models/queue.js');

// GET (read) the first item in database
router.get('/', (req, res, next) => {
  if (catDb.first) {
    const cat = peek(catDb);
    res.json(cat);
  } else {
    const err = new Error();
    err.message = 'All cats have a home!';
    err.status = 400;
    next(err);
  }
});

// DELETE (remove) the first item in database
router.delete('/', (req, res, next) => {
  if (catDb.first) {
    catDb.dequeue();
    res.sendStatus(204).end();
  } else {
    const err = new Error();
    err.message = 'All cats have a home!';
    err.status = 400;
    next(err);
  }
});

module.exports = router;
