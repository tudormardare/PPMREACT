const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'running', service: 'Service 2' });
});

app.listen(8080, () => {
    console.log('Service 2 è in esecuzione su http://localhost:8080');
});
