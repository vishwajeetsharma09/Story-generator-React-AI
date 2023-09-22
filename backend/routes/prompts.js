const express = require('express');
const router = express.Router();

// Define a sample array of prompts (you can replace this with database interactions)
const prompts = [];

// Get all prompts
router.get('/', (req, res) => {
  res.json(prompts);
});

// Create a new prompt
router.post('/', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for a prompt.' });
  }

  const newPrompt = { text };
  prompts.push(newPrompt);

  res.status(201).json(newPrompt);
});

module.exports = router;
