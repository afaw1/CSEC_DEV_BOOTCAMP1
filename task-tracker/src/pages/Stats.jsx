import React from 'react';
import Header from '../components/Header';
import { useTasks } from '../store/taskContext';

const Stats = () => {
  const { tasks } = useTasks();
  
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="container">
      <Header />
      
      <div>
        <h2>Task Statistics</h2>
        
        <div className="stats-grid">
          <div className="stats-card">
            <h3>Total Tasks</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{total}</p>
          </div>
          
          <div className="stats-card">
            <h3>Completed</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#28a745' }}>{completed}</p>
          </div>
          
          <div className="stats-card">
            <h3>Pending</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffc107' }}>{pending}</p>
          </div>
          
          <div className="stats-card">
            <h3>Completion</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#17a2b8' }}>{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;