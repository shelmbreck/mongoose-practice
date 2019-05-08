// Require Mongoose node module
let mongoose = require('mongoose');

let pieceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  creator: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    currentmuseum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Museum'
    },
  }
})

module.exports = mongoose.model('Piece', pieceSchema)

