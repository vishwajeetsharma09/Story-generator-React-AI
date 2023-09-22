const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  text: String, // Generated story text
  upvotes: { type: Number, default: 0 }, // Number of upvotes
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', storySchema);
