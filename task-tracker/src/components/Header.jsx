import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div>
        <h1>Task Tracker</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/stats" className="nav-link">Stats</Link>
        </div>
      </div>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="btn"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;