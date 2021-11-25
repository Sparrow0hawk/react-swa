import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Day2 from '../pages/Day2';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' component={<Home/>}></Route>
      <Route path='/day2' component={<Day2/>}></Route>
    </Routes>
  );
}

export default Main;
