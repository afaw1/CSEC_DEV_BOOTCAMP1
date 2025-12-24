import React from 'react';
import { useTasks } from '../store/taskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet</h3>
        <p>Add your first task above!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Tasks ({tasks.length})</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;