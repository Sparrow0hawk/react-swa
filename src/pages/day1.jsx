import React from 'react';
import ApiFetch from '@components/ApiFetch';
import NameForm from '@components/NameForm';
import ServeData from '@components/ServeData';

function Day1() {
    const Header = 'h1'
    return (
        <div>
            <div>
                <Header>Research Computing Christmas Puzzle</Header>
                <p>The HPC elves have run into problems with their christmas
                    calculations. They've been hex encoding important strings
                    but have lost the all important "ARC" string.
                    Can you find it amongst the attached data?

                    To prove you have submit the line number of the correct value.
                </p>
                <div><ServeData /></div>
            </div>
            <div>
                <div><ApiFetch /></div>
                <div><NameForm /></div>
            </div>
        </div>
    )

}
export default Day1;
