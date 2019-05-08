// Require Mongoose node module
let mongoose = require('mongoose');

let museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Museum', museumSchema)

