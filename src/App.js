import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
};

export default App;