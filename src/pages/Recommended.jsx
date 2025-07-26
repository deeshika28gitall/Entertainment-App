import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Recommended = () => {
  const { recommended, searchTerm } = useContext(AppContext);

  const filtered = recommended.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ paddingLeft: '80px', paddingRight: '20px' }}>
      <SearchBar />
      <h2>Recommended for you </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filtered.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    </div>
  );
};

export default Recommended;
