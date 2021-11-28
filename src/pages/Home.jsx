import React from 'react';
import { Link } from "react-router-dom"

function Home() {
  const Header = 'h1'
  return (
    <div>
      <Header>Research Computing Christmas Puzzle</Header>
      <Link to="/day1">1</Link>
      <Link to="/day2">2</Link>
    </div>
  )

}

export default Home;
