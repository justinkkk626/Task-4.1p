import React from 'react';
import NavBar from './components/NavBar';
import HeaderImage from './components/HeaderImage';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <HeaderImage />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;

