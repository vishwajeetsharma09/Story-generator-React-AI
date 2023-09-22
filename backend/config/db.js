const mongoose = require('mongoose');

// Replace 'mongodb://localhost/story-generator' with your MongoDB connection URL
const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/story-generator';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
