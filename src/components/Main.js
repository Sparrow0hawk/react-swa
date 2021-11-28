import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Day1 from '../pages/day1';
import Day2 from '../pages/day2';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={<Home />} />
      <Route path="day1" element={<Day1 />} />
      <Route path="day2" element={<Day2 />} />
    </Routes>
  );
}

export default Main;
