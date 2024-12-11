import { useState, useEffect } from 'react';
import { fetchMetricsForService, Metrics } from '../api/metricsApi';

export function useFetchMetrics(serviceId: string) {
    const [metrics, setMetrics] = useState<Metrics[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        if (!serviceId) {
            setLoading(false);
            setError(new Error('Service ID non fornito'));
            return;
        }

        fetchMetricsForService(serviceId)
            .then(data => {
                if (isMounted) {
                    setMetrics(data);
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
    }, [serviceId]);

    return { metrics, loading, error };
}
