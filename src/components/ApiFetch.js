import React, { useState, useEffect } from 'react';

function ApiFetch(param) {
    const [data, setData] = useState('');

    useEffect(() => {
        (async function () {
            const { text } = await (await fetch("/api/message?name=" + param)).json();
            setData(text);
        })();
    });

    return data;
}


export default ApiFetch;
