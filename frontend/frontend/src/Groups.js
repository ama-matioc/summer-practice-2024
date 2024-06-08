import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import RecomModal from './RecomModal';
import './App.css'; 
import axios from 'axios';


function Groups() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddMovie = async (newMovie) => {
    try {
      const response = await axios.post('http://localhost:3001/recommend', newMovie);

      if (response.status !== 200) {
        throw new Error('Failed to add movie recommendation');
      }

      fetchMovies();
      setShowModal(false);
    } catch (error) {
      console.error('Error adding movie recommendation:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <button className="button-make" onClick={handleOpenModal}>Make a recommendation</button>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <div key={index} className="mov-card">
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.Title}</h3>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Message:</strong> {movie.message}</p>
            <p><strong>Place:</strong> {movie.loc}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
          </div>
        ))}
      </div>
      <RecomModal show={showModal} onClose={handleCloseModal} onSubmit={handleAddMovie} />
    </div>
  );
}

export default Groups;
