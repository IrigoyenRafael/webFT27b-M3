const promise = new Promise((resolve, reject) =>{
    resolve(5)
})

promise 
    // al then solo le puedo dar esas dos cosas
    .then(
        value => console.log(value), // sucesshandler
        err => console.log(err) // errorhandler
    )
    .then(
        value => console.log(value), // sucesshandler
        err => console.log(err) // errorhandler
    )