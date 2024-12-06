import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './indexComponenet'; 
import Contact from './contact';
import Blog from './blog'; 
import Search from './search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/search" element={<Search />}/>
      </Routes>
    </Router>
  );
};

export default App;
