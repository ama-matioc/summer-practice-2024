import React, { useState } from 'react';

const RecomModal = ({ show, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [message, setMessage] = useState('');
  const [place, setPlace] = useState('');
  const [rating, setRating] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  const handleSubmit = () => {
    const newMovie = {
      title,
      director,
      message,
      place,
      rating,
      posterUrl
    };
    onSubmit(newMovie);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-cont">
        <h2>Recommend a Movie</h2>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} />
        <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <input type="text" placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} />
        <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <input type="text" placeholder="Poster URL" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecomModal;
