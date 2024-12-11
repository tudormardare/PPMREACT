import React from 'react';
import { useFetchServices } from '../../hooks/useFetchServices';

const ServicesList: React.FC = () => {
    const { services, loading, error } = useFetchServices();

    if (loading) return <div>Caricamento servizi...</div>;
    if (error) return <div style={{ color: 'red' }}>Errore: {error}</div>;
    if (!services || services.length === 0) return <div>Nessun servizio trovato</div>;

    return (
        <div>
            <h1>Lista Servizi</h1>
            <ul>
                {services.map((s) => (
                    <li key={`${s.host}-${s.port}`}>
                        {s.host}:{s.port} - {s.status}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ServicesList;
