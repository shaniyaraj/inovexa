const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  userId: String,
  visits: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('VisitData', visitSchema);
