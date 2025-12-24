import React from 'react';
import Header from '../components/Header';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;