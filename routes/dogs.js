'use strict';

const express = require('express');
const router = express();

const dogDb = require('../db/dog-db.js');

// GET (read) the first item in database
router.get('/', (req, res, next) => {
  if (dogDb[0]) {
    res.json(dogDb[0]);
  } else {
    const err = new Error();
    err.message = 'No dogs in database';
    err.status = 400;
    next(err);
  }
});

// DELETE (remove) the first item in database
router.delete('/', (req, res, next) => {
  if (dogDb[0]) {
    dogDb.shift();
    res.sendStatus(204).end();
  } else {
    const err = new Error();
    err.message = 'No dogs in database';
    err.status = 400;
    next(err);
  }
});

module.exports = router;
