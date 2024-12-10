import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesList from './pages/Services/ServicesList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/services" element={<ServicesList />} />
                <Route path="/" element={<div>Homepage: seleziona una pagina</div>} />
            </Routes>
        </Router>
    );
}

export default App;
