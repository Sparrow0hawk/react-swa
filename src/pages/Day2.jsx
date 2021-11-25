import React from 'react';
import ApiFetch from '@components/ApiFetch';
import NameForm from '@components/NameForm';

function Day2() {
  const Header = 'h1'
  return (
    <div>
      <div>
        <Header>Research Computing Christmas Puzzle</Header>
        <p>This is page 2!</p>
      </div>
      <div>
        <div><ApiFetch /></div>
        <div><NameForm /></div>
      </div>
    </div>
  )

}
export default Day2;
