// const http = require('http')

// http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.writeHead(200, {"content-type": "text/plain"})
//         res.end('hola, me crearon con http')
//     }

// }).listen(3001, 'localhost')


// Eso era Antes, ahora con express seria:

const express = require('express');
//para usarlo lo invocamos
const server =express();
const morgan = require('morgan');
const routerUsers = require('./routersUsers')
const routersMovie = require('./routersMovies')

//vamos a crear middleware
// use siempre arriba de las rutas! 
server.use('/', (req, res, next) => {
    console.log('soy el middleware :D'),
    next()
})

server.use(morgan('dev'))
server.use(express.json())

//ahora como creamos rutas
// server.get('/', (_req, res) => {
//     res.send('hola soy la ruta general')
// })

server.use('/users', routerUsers)
server.use('/movies', routersMovie)

server.get('/users', (req, res) => {
    res.send('Buenas, estas en la ruta users')
})

// Esto es eraro para ver si matchea uno o otro
server.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
})

// asterisco significa que puede estar repetido muchas ves y igual matchea
server.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
})

server.listen(3001, () => {
    console.log('Server listen on port 3001');
})
