import React, { useState } from 'react';
import { useTasks } from '../store/taskContext';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task..."
      />
      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={!input.trim()}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;