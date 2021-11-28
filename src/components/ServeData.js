import React from 'react';
import { useLocation } from 'react-router-dom';


function ServeData() {

    let location = useLocation();
    let challenge_name = location.pathname.substring(1);

    return (
        <a href={process.env.PUBLIC_URL + "/challenge_data/" + challenge_name}>
            Challenge data
        </a>
    );
}


export default ServeData;
