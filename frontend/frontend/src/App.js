import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';
import Movies from './Movies';
import Tvseries from './Tvseries';
import Groups from './Groups';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<Tvseries />} />
      </Routes>
    </Router>
  );
}

export default App;
