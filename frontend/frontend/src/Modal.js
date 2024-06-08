import React from 'react';
import './App.css'; 

const Modal = ({ show, onClose, movie }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={movie.Poster} />
        <h2>{movie.Title}</h2>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
