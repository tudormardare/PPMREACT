// Esempio di funzioni per recuperare la lista servizi e un servizio specifico
// Questi endpoint sono solo di esempio, in base alla tua API dovrai cambiarli

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export interface Service {
    id: string;
    name: string;
    status: string; // "running", "stopped", ecc.
    host: string;
}

export async function fetchServicesList(): Promise<Service[]> {
    const response = await fetch(`${BASE_URL}/services`);
    if (!response.ok) {
        throw new Error(`Errore nel recupero servizi: ${response.statusText}`);
    }
    return response.json();
}

export async function fetchServiceById(serviceId: string): Promise<Service> {
    const response = await fetch(`${BASE_URL}/services/${serviceId}`);
    if (!response.ok) {
        throw new Error(`Errore nel recupero del servizio: ${response.statusText}`);
    }
    return response.json();
}
