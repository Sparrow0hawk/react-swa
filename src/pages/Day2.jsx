import React from 'react';
import ApiFetch from '@components/ApiFetch';
import NameForm from '@components/NameForm';

function Day2() {
  const Header = 'h1'
  return (
    <div>
        <div>
        <Header>Research Computing Christmas Puzzle</Header>
        </div>
        <div>
            This is day 2's puzzle!
            <div><ApiFetch /></div>
            <div><NameForm /></div>
        </div>
    </div>
  )

}
export default Day2;
