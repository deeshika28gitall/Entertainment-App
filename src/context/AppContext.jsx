import React, { createContext, useState } from 'react';
import data from '../data/data.json'; // ✅ use import, not fetch

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const trending = data.filter(item => item.isTrending);
  const recommended = data.filter(item => !item.isTrending); // or use isRecommended if it exists

  return (
    <AppContext.Provider value={{ trending, recommended, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
