import React, { useState } from 'react';
import './App.css';
import Task from './Tasks';

function App() {
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const styles = {
    'backgroundColor': 'white',
    'padding': '20px'
  }

  const handleClick = () => {
    if (taskDescription) {
      const newTask = {
        id: Date.now(), // Use a unique identifier (e.g., timestamp) for each task
        description: taskDescription,
      };
      setTasks([...tasks, newTask]);
      setTaskDescription('');
    }
  }

  const handleTaskDeletion = (taskId) => {
    // Filter out the task with the given taskId from the tasks state
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <input
        id='taskDescription'
        style={styles}
        type="text"
        placeholder='Task description'
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleClick}>Add Task</button>

      {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          onDelete={() => handleTaskDeletion(task.id)} // Pass the onDelete function
        />
      ))}
    </div>
  );
}

export default App;
