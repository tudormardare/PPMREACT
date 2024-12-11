const express = require('express');
const { listRunningContainers } = require('./utils/dockerUtils');
const { scanNetwork, scanPorts } = require('./utils/networkScanner');

const app = express();
const PORT = 5000;

// Endpoint per elencare i container Docker
app.get('/services/docker', async (req, res) => {
    try {
        const containers = await listRunningContainers();
        res.json(containers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Errore durante il recupero dei container Docker.' });
    }
});

// Endpoint per eseguire uno scan della rete
app.get('/network/scan', (req, res) => {
    const subnet = req.query.subnet || '192.168.0'; // Default subnet
    console.log(`Scanning rete ${subnet}.x...`);

    scanNetwork(subnet, (hosts) => {
        const results = [];
        const portsToCheck = [80, 8080, 443]; // Porte da controllare

        hosts.forEach((host) => {
            scanPorts(host, portsToCheck, (result) => {
                results.push(result);
                if (results.length === hosts.length) {
                    res.json(results);
                }
            });
        });
    });
});

// Avvia il backend
app.listen(PORT, () => {
    console.log(`Backend in esecuzione su http://localhost:${PORT}`);
});
