// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  res.render('museums/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.send('STUB - NEW MUSEUM POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  db.Museum.findById(req.params.id)
  .then(museum => {
    if(museum){
      // We found a museum. Let's do a query to get the pieces in this museum (by id)
      db.Piece.find({ museum: museum.id })
      .then(pieces => {
        museum.pieces = pieces || [];
        res.render('museums/show', { museum: museum });
      })
      .catch(err => {
        console.log('Error fetching pieces in GET /museums/:id', err);
        res.send('TODO: Make an error.ejs page');
      });
    }
    else {
      // There was no museum found with this id!!!
      res.send('TODO: Decide what to show user if no museum with that id was found');
    }
  })
  .catch(err => {
    console.log('Error fetching museums in GET /museums/:id route:', err);
    res.send('TODO: Make a beautiful error page for the user');
  });
});

module.exports = router;
