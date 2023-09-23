import { useState, useEffect } from 'react';
// import axios from 'axios';


const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            fetch('https://noelpereira2500.pythonanywhere.com/api/retrieveeventsforfrontend')
                .then(response => {
                    // Check if the request was successful
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();  // Parse the returned JSON data
                })
                .then(data => {
                    setData(data.Items);  // Assuming the data has an 'events' property
                })
                .catch(err => {
                    setError(err.message);
                });
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;