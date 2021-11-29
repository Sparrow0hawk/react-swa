import React, { useState } from 'react';
import axios from 'axios';
import GetLocation from './GetLocation';

function NameForm(props) {
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState("");

    const data = {
        answer: answer,
        day: GetLocation()
    };

    const handleSubmit = (event) => {
        axios.post("/api/message", { 'answer': data.answer, 'day': data.day })
            .then(response => setResult(response.data))
        event.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Answer
                    <input
                        type="text"
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {result}
            </div>
        </div>
    );
}

export default NameForm;
