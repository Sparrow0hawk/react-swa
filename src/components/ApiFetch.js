import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ApiFetch(param) {
    const [data, setData] = useState('');
    const location = useLocation();
    const domain = location.pathname.substring(1)

    useEffect(() => {
        (async function () {
            const { text } = await (await fetch("/api/message?day=" + domain + "&answer=" + param)).json();
            setData(text);
        })();
    });

    return data;
}


export default ApiFetch;
