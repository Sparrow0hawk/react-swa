import React, { useState, useEffect } from 'react';

function ApiFetch() {
    const [data, setData] = useState('');

    useEffect(() => {
        (async function () {
            const { text } = await (await fetch(`/api/message`)).json();
            setData(text);
        })();
    });

    return <div>{data}</div>;
}


export default ApiFetch;