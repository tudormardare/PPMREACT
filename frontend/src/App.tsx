import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ServicesList from './pages/Services/ServicesList';

function Homepage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Homepage</h1>
            <p>Seleziona una pagina</p>
            <button onClick={() => navigate('/services')}>Vai alla lista dei servizi</button>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/services" element={<ServicesList />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;
