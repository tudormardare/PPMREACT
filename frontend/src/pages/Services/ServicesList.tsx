import React from 'react';
import { useFetchServices } from '../../hooks/useFetchServices';

const ServicesList: React.FC = () => {
    const { services, loading, error } = useFetchServices();

    if (loading) return <div>Caricamento servizi in corso...</div>;
    if (error) return <div>Errore nel caricamento dei servizi: {error.message}</div>;
    if (!services || services.length === 0) return <div>Nessun servizio trovato</div>;

    return (
        <div>
            <h1>Lista dei Servizi</h1>
            <table>
                <thead>
                <tr>
                    <th>Nome Servizio</th>
                    <th>Stato</th>
                    <th>Host</th>
                </tr>
                </thead>
                <tbody>
                {services.map(service => (
                    <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>{service.status}</td>
                        <td>{service.host}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServicesList;
