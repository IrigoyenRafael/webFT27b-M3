const express = require('express');
// crear routers
const routersMovie = express.Router();


routersMovie.get('/', (req, res) => {
    // si es unicamente '/movie- que me devuelva todas las movies.
    //si llego al asi name=name me devuelven el trabajo 
    const {name,  mail} = req.query
    res.send('Soy la ruta GET de movies')
})

routersMovie.get('/:id', (req, res) => {
    console.log(req.params)
    const { id } = req.params; 

    res.send(`la infomacion solicitada fue el id: ${id}`)
})

routersMovie.post('/', (req, res) => {
    res.send('soy la ruta POST de movies')
})

routersMovie.put('/', (req, res) => {
    res.send('soy la ruta PUT de movies')
})

routersMovie.delete('/', (req, res) => {
    res.send('soy la ruta DELETE de movies')
})

module.exports = routersMovie;


// DIFERENCIAS ENTRE ROUTAS FRONT / BACK
//CLIENTE Localhost:3000/movies
//RENDERIZABA UN COMPONENTE DEL CUAL QUIERO QUE ME MUESTRE LAS PELIS

//useEffect() => iba a buscar la info de las movies --> dispatch(action)
// action:
// return function(){
//     fetch(url) //(esto es la api end point)
        // es decir que esto es un router backend
        // fetch(localhost:3001/movies)
//         .then(res => res.json())
// }