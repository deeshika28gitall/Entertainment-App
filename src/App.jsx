import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppProvider from './context/AppContext';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Recommended from './pages/Recommended';
import Header from './components/Header';

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
