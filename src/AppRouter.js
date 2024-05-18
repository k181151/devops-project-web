// src/AppRouter.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';

const AppRouter = () => (
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  </BrowserRouter>

);

export default AppRouter;
