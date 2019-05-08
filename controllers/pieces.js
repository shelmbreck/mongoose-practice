// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

let db = require('../models')

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  db.Piece.find()
  .populate('museum')
  .then((pieces) => {
    res.render('pieces/index', {pieces})
  })
  .catch((error) => {
    console.log('error', error)
  })
  res.render('pieces/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Piece.create({
    name: req.body.name,
    image: req.body.image,
    creator: {
      firstname: req.body.creator_firstname,
      lastname: req.body.creator_lastname,
      image: req.body.creator_image,
      currentmuseum: req.body.creator_currentmuseum
    }
  })
  .then(newMuseum => {
    res.redirect('/pieces');
  })
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  db.Museum.find()
  .then(museums => {
    res.render('pieces/new', {museums});
  })
  .catch((error) => {
    console.log('error', error)
  })
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  db.Museum.findById(req.params.id)
  .then(foundPiece => {
    res.render('pieces/show', {foundPiece});
  })
  .catch((error) => {
    console.log('error', error)
    res.send('error')
  })
  //  and a list of pieces that musuem contains
  res.send('museums/show');
  res.send('pieces/show');
});

module.exports = router;











