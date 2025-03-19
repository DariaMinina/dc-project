import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('/api/data')
        .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
        })
        .then(data => setData(data))
        .catch(err => setError(err.message));
    }, []);

    return (
    <div>
        <h1>Simple App</h1>
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
    );
}

export default App;