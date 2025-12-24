import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TaskProvider } from './store/taskContext'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </TaskProvider>
  )
}

export default App;