// Rutas (para usuarios):
// - USERS
// - GET --> Query(opcional) ?name=rafa => mostrar todos los usuarios y si hay query buscar por nombre
// - GET --> /:id Params(otra ruta por parametros, sirve para buscar info algo especifico) eso me deberia retornar/mostrar usuario con ese id especificado
// - POST --> agregar un nuevo usuario
// - DELETE --> eliminar un usuario
// - PUT --> actualizar/modificar datos de un usuario especifico


// Query informacion opcional
// Body lo usamos para post (cuando queremos enviar info para guardar o modificar)

// para simular BASE DE DATOS usamos un array
const express = require('express');
const { emit } = require('../src/app');
const {
    getUsers,
    getUsersByName,
    postUsers,
    getUsersById,
    deleteUser

} = require('./models/controllers')

const usersRoute = express.Router();

// - GET -->
usersRoute.get('/', (req, res) => {

    //en rutas GET no mandamos body

    // si hay query, mostrar los especificados 
    const {name} = req.query; // verificamos si llega algo por query

    if(name){
        const users = getUsersByName(name) 

        if(users['error']) return res.status(400).json(users)
        else {
            return res.status(200).json(users)
        }
    }
    else {
        // devuelve todos los usarios si no hay query
        const users = getUsers();
    
        return res.status(200).send(users)

    }


})

// - POST --> agregar un nuevo usuario. Metodo http
// como vamos a crear es .body
usersRoute.post('/', (req, res) => {
    const {name, lastName, mail} = req.body;

    if(!name || !lastName  ||  !mail) return res.status(404).json({error: 'falta info'})
    else{
        const newUser = postUsers(name, lastName, mail);

        return res.status(200).json(newUser)
    }
})


// el id llega por param asi que usar ruta nueva

// - GET 
usersRoute.get('/:id', (req, res) => {
    const {id} = req.params;

    const user = getUsersById(id)

    if(user['error']) return res.status(404).json(user)
    else {
        return res.status(200).json(user)
    }
})

usersRoute.put('/', (req, res) => {
    const {id, name, lastName, mail} = req.body

    if(!id || !name || !lastName ||  !mail) return res.status(400).json({error: 'falta info'})
    else{
        const upUser = updateUsers(id, name, lastName, mail);

        if(upUser['error']) return res.status(400).json(upUser)
        else{
            return res.status(200).json(upUser)
        }
    }
})

usersRoute.delete('/:id', (req, res) => {
    const { id } = req.params;

    const delUser = deleteUser(id);

    if(delUser['error']) return res.status(400).json(delUser)
        else{
            return res.status(200).json(delUser)
        }
})


// donde esta el simbolo para activar el thunder?

module.exports = usersRoute;