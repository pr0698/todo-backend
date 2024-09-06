import { useState } from "react";
import './Todos.css'; // Import the CSS file

export function Todos({ todos }) {
    console.log("inside todos page", todos);

    // Check if todos is an array to prevent errors
    if (!Array.isArray(todos)) {
        console.error("Todos component received invalid data:", todos);
        return <p>Error: Invalid todos data</p>;
    }

    return (
        <div className="todos-container">
            {todos.map((todo, index) => (
                <div key={index} className="todo-item"> {/* Added class for styling */}
                    <h1 className="todo-title">{todo.title}</h1> {/* Added class for styling */}
                    <p className="todo-description">{todo.description}</p> {/* Added class for styling */}
                    <button
                        className={`todo-button ${todo.completed ? 'completed' : ''}`} // Conditionally applied class
                    >
                        {todo.completed ? "Completed" : "Mark as Done"}
                    </button>
                    {console.log(`todos inside map, ${todo}`)}
                </div>
            ))}
        </div>
    );
}
