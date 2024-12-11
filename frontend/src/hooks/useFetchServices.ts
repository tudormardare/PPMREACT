import { useState, useEffect } from 'react';

interface Service {
    id: string;
    name: string;
    status: string;
    host: string;
    port: number;
}

export function useFetchServices() {
    const [services, setServices] = useState<Service[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/network/scan?subnet=192.168.0`;

        console.log('Scanning network:', url);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Errore durante lo scanning: ${res.statusText}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log('Servizi trovati:', data);
                setServices(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Errore durante lo scanning:', err.message);
                setError(err.message);
                setLoading(false);
            });
    }, []);


    return { services, loading, error };
}
