import React, { useEffect, useState } from 'react';
import axios from "axios";
const DemoCheck = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch data from the demo route
        axios.get('/api/demo')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching demo data:', error));
    }, []);

    return (
        <div>
            <h1>Demo Check</h1>
            <p>{message}</p>
        </div>
    );
};

export default DemoCheck;
