const express = require('express');
const router = express.Router();
const FormData = require('../model/formData');

// Middleware to validate form
const validateForm = (req, res, next) => {
  const { name,contact, email, company } = req.body;
  if (!name || !contact || !email || !company) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  next();
};

// POST route
router.post('/', validateForm, async (req, res) => {
  try {
    const newFormEntry = new FormData(req.body);
    await newFormEntry.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
