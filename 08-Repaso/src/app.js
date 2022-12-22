const express = require('express')
const morgan = require('morgan')
const usersRoute = require('./routes/usersRouter')
const postsRouter = require('./routes/postsRouter')

const server = express();

//Necesitamos middleware
server.use(express,json()); // YO PARSEO
//morgan me muestra en consola todas las peticiones y respuestas request and respond en el server
server.use(morgan('dev'));


// aqui colocamos el router porque estan los middlewares
server.use('/users', usersRoute)
server.use('/user/posts', postsRouter)

// Rutas (para usuarios):
// - USERS
// - GET --> Query(opcional) ?name=rafa => mostrar todos los usuarios y si hay query buscar por nombre
// - GET --> /:id Params(otra ruta por parametros, sirve para buscar info algo especifico) eso me deberia retornar/mostrar usuario con ese id especificado
// - POST --> agregar un nuevo usuario
// - DELETE --> eliminar un usuario
// - PUT --> actualizar/modificar datos de un usuario especifico

// - POSTS (rutas para posteo)
// - GET --> mostrar todos los posts
// - GET --> /:id --> mostrar un post con ese id especificado
// - POST --> agregar un nuevo post
// - DELETE --> borrar un post
// - PUT --> actualizar/modificar datos de un post

// Que usabamos para modalizar? R: router (y una nueva carpeta)






module.exports = server;