import { useState } from "react";
import './createTodo.css'; // Import the CSS file

export function CreateTodo({ onTodoCreated }) { // Accept onTodoCreated as a prop
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Todo created:", data);
      alert("Todo created successfully!");
      onTodoCreated(); // Call the function to fetch updated todos
      // Clear input fields after successful creation
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating todo:", error);
      alert("Failed to create todo. Please try again.");
    }
  };

  return (
    <div className="create-todo-container">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="create-todo-input" // Apply CSS class
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="create-todo-input" // Apply CSS class
      />
      <button
        onClick={handleAddTodo}
        className="create-todo-button" // Apply CSS class
      >
        Add a Todo
      </button>
    </div>
  );
}
