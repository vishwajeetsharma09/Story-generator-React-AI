const express = require('express');
const router = express.Router();

// Define a sample array of stories (you can replace this with database interactions)
const stories = [];

// Get all stories
router.get('/', (req, res) => {
  res.json(stories);
});

// Create a new story
router.post('/', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for a story.' });
  }

  const newStory = { text };
  stories.push(newStory);

  res.status(201).json(newStory);
});

module.exports = router;
