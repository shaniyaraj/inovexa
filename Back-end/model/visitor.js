const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true
  },
  userAgent: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: true
  },
  referrer: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: 'Unknown'
  },
  city: {
    type: String,
    default: 'Unknown'
  }
}, { timestamps: true });

module.exports = mongoose.model('Visitor', visitorSchema); 