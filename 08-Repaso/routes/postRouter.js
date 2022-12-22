// - POSTS (rutas para posteo)
// - GET --> mostrar todos los posts
// - GET --> /:id --> mostrar un post con ese id especificado
// - POST --> agregar un nuevo post
// - DELETE --> borrar un post
// - PUT --> actualizar/modificar datos de un post

// Que usabamos para modalizar? R: router (y una nueva carpeta)


const express = require('express')
const postsRouter = express.Router();
const {posteoPost} = require('./models/controllers')

postsRouter.post('/', (req, res) => {
    try {
        const {userId, tittle, content} = req.body;

        if(!userId  || !tittle || !content) throw new Error('Falta info')
        else {
            const newPost = posteoPost(userId, tittle, content)
            return res.status(200).json(newPost)

        }

    } catch (error) {
        return res.status(400).json(error.message)
    }
    
})



module.exports = postsRouter;