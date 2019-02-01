// Require needed modules
const express = require('express');

// Declare router and models reference
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then(pieces => {
    res.render('pieces/index', { pieces: pieces });
  })
  .catch(err => {
    console.log('Error in GET /pieces route:', err);
    res.send('TODO: Create error.ejs to render nice error pages!');
  });
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  console.log(req.body);
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    originCountry: req.body.originCountry,
    museum: req.body.museumId,
    creator: {
      firstname: req.body.creatorFirstname,
      lastname: req.body.creatorLastname,
      image: req.body.creatorImage,
      birthyear: req.body.creatorBirth,
      deathyear: req.body.creatorDeath
    }
  })
  .then(result => {
    console.log('successfully created Mona Lisa');
    res.redirect('/pieces');
  })
  .catch(err => {
    console.log('Error Message', err);
    res.send('An error happened');
  });
});

router.get('/new', (req, res) => {
  // Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', { museums: museums });
  })
  .catch(err => {
    console.log('Error Message', err);
    res.send('An error happened');
  });
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
