const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Import your database configuration
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes
const promptsRouter = require('./routes/prompts');
const storiesRouter = require('./routes/stories');
const leaderboardRouter = require('./routes/leaderboard');

app.use('/api/prompts', promptsRouter);
app.use('/api/stories', storiesRouter);
app.use('/api/leaderboard', leaderboardRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
