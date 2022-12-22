var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor

http.createServer((req, res) => {
    if(req.url === 'arcoiris_doge') {
        fs.readFile(`${__dirname}/images/${req.url}.jpg`, (err, data) => {
            if(err) {
                res.writeHead(404, {'content-type': 'text/plain'});
                res.end('Hubo un error, este perrito no existe');}
            else {
                
                res.writeHead(200, {'content-type': 'img/jpg '});
                res.end(data) }
        });
    }

}).listen(3000, '127.0.0.1')
