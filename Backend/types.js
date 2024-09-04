const zod = require('zod');

// Create schema with consistent types and refined validation
const createTodo = zod.object({
  title: zod.string().nonempty("Title is required"), // Ensure title is not empty
  description: zod.string().optional(), // Make description optional if not always needed
});

// Update schema with consistent ID type
const updateToDo = zod.object({
  id: zod.number().nonnegative("ID must be a positive number"), // Change to match your actual ID type (number or string)
});

module.exports = {
  createTodo: createTodo,
  updateToDo: updateToDo,
};