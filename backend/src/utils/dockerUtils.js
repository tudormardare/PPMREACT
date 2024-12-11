const Docker = require('dockerode');
const docker = new Docker();

async function listRunningContainers() {
    const containers = await docker.listContainers();
    return containers.map(container => ({
        id: container.Id,
        name: container.Names[0].replace('/', ''),
        image: container.Image,
        state: container.State,
        status: container.Status
    }));
}

async function checkServiceHealth(containerName) {
    const container = docker.getContainer(containerName);
    const data = await container.inspect();
    return {
        name: containerName,
        state: data.State.Status,
        health: data.State.Health ? data.State.Health.Status : 'unknown'
    };
}

module.exports = {
    listRunningContainers,
    checkServiceHealth
};
