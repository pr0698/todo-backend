import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo'; // Ensure this path is correct
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from the server
  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos'); // Ensure URL is correct
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log('Fetched data:', jsonData);
      if (Array.isArray(jsonData.todos)) {
        setTodos(jsonData.todos);
      } else {
        console.error('Fetched data does not have a valid todos array:', jsonData);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo onTodoCreated={fetchTodos} /> {/* Pass fetchTodos as a prop */}
      <Todos todos={todos} />
    </div>
  );
}

export default App;
