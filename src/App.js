import React from 'react';
import ApiFetch from '@components/ApiFetch';
import NameForm from '@components/NameForm';

function App() {
  const Header = 'h1'
  return (
    <div>
      <Header>Research Computing Christmas Puzzle</Header>
      <div><ApiFetch /></div>
      <div><NameForm /></div>
    </div>
  )

}


export default App;
