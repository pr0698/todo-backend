const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema with the correct types
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false }, // Use Boolean (Mongoose type) instead of zod's boolean
});

// Create the model
const Todo = mongoose.model('Todo', todoSchema); // Model names should be capitalized and usually singular

// Export the model
module.exports = {
  Todo, // Use capitalized variable name to match the model naming convention
};



