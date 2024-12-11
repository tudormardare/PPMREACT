import { useState, useEffect } from 'react';

interface Service {
    id: string;
    name: string;
    status: string;
    host: string;
}

export function useFetchServices() {
    const [services, setServices] = useState<Service[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/services`;
        console.log('Fetching services from URL:', url);

        fetch(url)
            .then(async (res) => {
                console.log('HTTP Response status:', res.status);
                const text = await res.text();
                console.log('Raw response:', text);

                if (!res.ok) {
                    throw new Error(`Errore HTTP: ${res.statusText}`);
                }

                const json = JSON.parse(text);
                console.log('Parsed JSON:', json);
                return json;
            })
            .then((data) => {
                setServices(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Errore durante il fetch:', err.message);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { services, loading, error };
}
