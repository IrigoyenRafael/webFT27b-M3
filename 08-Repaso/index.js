// vamos a levantar nuestro servidor "solamente" lo exporte de app. acostumbrarse al server 3001 porque el frontend usamos el 3000.

const server = require('./src/app')

server.listen(3001, () => {
    console.log('Server on port 3001');
})