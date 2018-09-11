// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

// Declare a reference to the models
const db = require('../models');

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.render('museums/index', { museums: museums });
  })
  .catch(err => {
    console.log('Error Message', err);
    res.render('error');
  });
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  .then(result => {
    console.log(result);
    res.redirect(`/museums/${result.id}`);
  })
  .catch(err => {
    console.log('Error Message', err);
    res.render('error');
  });
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum => {
    db.Piece.find({ museum: museum.id })
    .then(pieces => {
      museum.pieces = pieces || [];
      res.render('museums/show', { museum: museum });
    })
    .catch(errInner => {
      console.log(errInner);
      res.render('error');
    });
  })
  .catch(err => {
    console.log(err);
    res.render('error');
  })
});

module.exports = router;
