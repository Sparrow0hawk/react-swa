import { useLocation } from 'react-router-dom';

function GetLocation() {
    const location = useLocation();
    const domain = location.pathname.substring(1)

    return domain;
}


export default GetLocation;
