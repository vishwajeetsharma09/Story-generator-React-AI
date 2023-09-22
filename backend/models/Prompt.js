const mongoose = require('mongoose');

// Define the schema for prompts
const promptSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Ensure that the prompt text is required
    minlength: 10, // Adjust the minimum length as needed
    maxlength: 1000, // Adjust the maximum length as needed
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation timestamp
  },
});

// Create and export the 'Prompt' model
module.exports = mongoose.model('Prompt', promptSchema);
