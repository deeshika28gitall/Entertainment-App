import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Trending = () => {
  const { trending, searchTerm } = useContext(AppContext);

  const filtered = trending.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ paddingLeft: '80px', paddingRight: '20px' }}>
      <SearchBar />
      <h2>Trending</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filtered.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    </div>
  );
};

export default Trending;
