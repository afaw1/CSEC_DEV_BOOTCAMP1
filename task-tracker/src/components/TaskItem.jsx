import React from 'react';
import { useTasks } from '../store/taskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: '10px' }}
      />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <button 
        onClick={() => deleteTask(task.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;