const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Error: Página no encontrada');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (path === '/funcion.js') {
        fs.readFile('funcion.js', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Error: Archivo no encontrado');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error: Archivo no encontrado');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
