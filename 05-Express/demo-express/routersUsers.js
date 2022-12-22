const express = require('express');
// crear routers
const routerUsers = express.Router();


routerUsers.get('/', (req, res) => {
    res.send('Soy la ruta GET de users')
})

routerUsers.post('/', (req, res) => {
   // res.send('soy la ruta POST de users')

   const {name, mail, password} = req.body;

   if(name&&mail&&password){
        return res
                .status(200)
                .send('Me llego todo ok')
   }
   else{
    return res
            .status(404)
            .send('me falta info')
   }
}) // metodo para guardar

//mandar por query? para datos seguros post, 


module.exports = routerUsers;




