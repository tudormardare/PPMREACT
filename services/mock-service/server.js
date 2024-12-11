const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Usa il file db.json
const middlewares = jsonServer.defaults();

server.use(cors()); // Abilita CORS
server.use(middlewares);
server.use(router);

server.listen(8000, () => {
    console.log('JSON Server è in esecuzione su http://localhost:8000');
});
