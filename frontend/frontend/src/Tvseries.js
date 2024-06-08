import React, { useState }  from 'react'
import Navbar from './Navbar'
import SeriesData from './series.json';
import Modal from './Modal';
function Tvseries() {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleMovieClick = (movie) => {
      setSelectedMovie(movie);
    };
    const handleCloseModal = () => {
      setSelectedMovie(null);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredMovies = SeriesData.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <div>
        <Navbar></Navbar>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="movie-container">
          {SeriesData.map((movie, index) => (
            <div key={index} className="movie-card" onClick={() => handleMovieClick(movie)}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </div>
          ))}
        </div>
        <Modal show={selectedMovie !== null} onClose={handleCloseModal} movie={selectedMovie} />
        </div>
    )
  }
export default Tvseries