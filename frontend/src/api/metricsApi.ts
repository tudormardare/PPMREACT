// Esempio per recuperare metriche.
// L'endpoint è ipotetico: /services/:id/metrics che restituisce un oggetto con cpu, ram e timestamp
// Definisci le interfacce secondo la risposta attesa dalla tua API.

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export interface Metrics {
    cpu: number;
    ram: number;
    timestamp: number;
}

export async function fetchMetricsForService(serviceId: string): Promise<Metrics[]> {
    const response = await fetch(`${BASE_URL}/services/${serviceId}/metrics`);
    if (!response.ok) {
        throw new Error(`Errore nel recupero metriche: ${response.statusText}`);
    }
    return response.json();
}
