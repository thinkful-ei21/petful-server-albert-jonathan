'use strict';

const express = require('express');
const router = express();

const catDb = require('../db/cat-db.js');

// GET (read) the first item in database
router.get('/', (req, res, next) => {
  if (catDb[0]) {
    res.json(catDb[0]);
  } else {
    const err = new Error();
    err.message = 'No cats in database';
    err.status = 400;
    next(err);
  }
});

// DELETE (remove) the first item in database
router.delete('/', (req, res, next) => {
  if (catDb[0]) {
    catDb.shift();
    res.sendStatus(204).end();
  } else {
    const err = new Error();
    err.message = 'No cats in database';
    err.status = 400;
    next(err);
  }
});

module.exports = router;
