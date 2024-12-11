const ping = require('ping');
const portscanner = require('portscanner');

function scanNetwork(subnet, callback) {
    const session = ping.createSession();
    const hosts = [];
    const promises = [];

    for (let i = 1; i <= 254; i++) {
        const ip = `${subnet}.${i}`;
        promises.push(
            new Promise((resolve) => {
                session.pingHost(ip, (error) => {
                    if (!error) {
                        hosts.push(ip);
                    }
                    resolve();
                });
            })
        );
    }

    Promise.all(promises).then(() => {
        callback(hosts);
    });
}

function scanPorts(host, ports, callback) {
    portscanner.findAPortInUse(ports, host, (error, port) => {
        if (port) {
            callback({ host, port, status: 'active' });
        } else {
            callback({ host, port: null, status: 'inactive' });
        }
    });
}

module.exports = {
    scanNetwork,
    scanPorts
};
