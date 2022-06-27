import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) {
            return;
        }

        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/data.json');
                const data = await response.json();

                data.map((elet) => console.log(elet));
                setData(data);
            } catch (err) {
                console.log('error', err);
                setError(true);
            } finally {
                setIsloading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export { useFetch };
