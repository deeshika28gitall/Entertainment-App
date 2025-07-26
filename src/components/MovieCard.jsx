import React from 'react';



const MovieCard = ({ movie }) => (
  <div style={{
    width: '220px',
    margin: '12px',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#1f1f1f',
    color: 'white'
  }}>
    <img
      src={movie.thumbnail}
      alt={movie.title}
      style={{ width: '100%', height: '320px', objectFit: 'cover' }}
    />
    <div style={{ padding: '10px' }}>
      <small style={{ color: '#bbb' }}>{movie.year} • {movie.category}</small>
      <h3 style={{ margin: '8px 0 0', fontSize: '16px' }}>{movie.title}</h3>
    </div>
  </div>
);

export default MovieCard;
