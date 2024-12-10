import { useState, useEffect } from 'react';
import { fetchServicesList, Service } from '../api/servicesApi';

export function useFetchServices() {
    const [services, setServices] = useState<Service[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        fetchServicesList()
            .then(data => {
                if (isMounted) {
                    setServices(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return { services, loading, error };
}
