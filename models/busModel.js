const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },

  sto: {
    type: String,
    required: true,
  },

  sfrom: {
    type: String,
    required: true,
  },

  journeyDate: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  seatsBooked: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
    default: "Yet To Start",
  },
  rating: {
    type: Number,
    default: 0,
  },

});

module.exports = mongoose.model("buses", busSchema);
