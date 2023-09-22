const express = require('express');
const router = express.Router();

// Define a sample array of leaderboard entries (you can replace this with database interactions)
const leaderboard = [];

// Get the top-voted stories
router.get('/', (req, res) => {
  // Sort the stories by votes (assuming stories have a 'votes' property)
  const sortedStories = leaderboard.sort((a, b) => b.votes - a.votes);

  res.json(sortedStories);
});

// Upvote a story (assuming you have a story ID parameter)
router.post('/upvote/:storyId', (req, res) => {
  const { storyId } = req.params;

  // Find the story by ID (you would replace this with your database query)
  const story = leaderboard.find((s) => s.id === storyId);

  if (!story) {
    return res.status(404).json({ error: 'Story not found.' });
  }

  // Increment the votes for the story (assuming it has a 'votes' property)
  story.votes++;

  res.json(story);
});

module.exports = router;
