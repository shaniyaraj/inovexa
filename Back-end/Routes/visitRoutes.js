const express = require('express');
const router = express.Router();
const Visit = require('../models/visitData');

router.post('/track-visit', async (req, res) => {
  let userId = req.cookies.userId;

  if (!userId) {
    userId = `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    res.cookie('userId', userId, { httpOnly: true, sameSite: 'Lax' });
  }

  let visitDoc = await Visit.findOne({ userId });

  if (!visitDoc) {
    visitDoc = new Visit({ userId, visits: [{ timestamp: new Date() }] });
  } else {
    visitDoc.visits.push({ timestamp: new Date() });
  }

  await visitDoc.save();

  const totalUsers = await Visit.countDocuments();

  res.json({
    message: 'Visit tracked',
    visitCount: visitDoc.visits.length,
    totalUsers,
  });
});

module.exports = router;
