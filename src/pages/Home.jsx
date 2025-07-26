import React, { useContext } from 'react';


import { AppContext } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const { trending, recommended, searchTerm } = useContext(AppContext);

  const filteredTrending = trending.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredRecommended = recommended.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ paddingLeft: '80px', paddingRight: '20px' }}>
      <SearchBar />
      <h2>Trending</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredTrending.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>

      <h2 style={{ marginTop: '40px' }}>Recommended</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredRecommended.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
