// sintaxis de funciones generadoras

// function* generatorFunction(){
//     console.log('Iniciando la generator funcion');
//     yield 'Seba'
//     yield 'Eze'
//     console.log('Generator terminada');
// }

// const tuki = generatorFunction(); //{}
// console.log(tuki);
// console.log(tuki.next()); // {}
// console.log(tuki.next()); // {}
// console.log(tuki.next()); // {}


// const tuki2 = generatorFunction(); //{}
// console.log(tuki2);
// console.log(tuki2.next()); // {}
// console.log(tuki2.next()); // {}
// console.log(tuki2.next()); // {}


// function* generatorFunction(){
//     console.log('Iniciando la generator funcion');
//     console.log(1,yield('ssssss'))
//     2,yield
//     return 'Generator terminada';
//     yield 'hola'
// }

// const tuki = generatorFunction(); //{}
// console.log(tuki);
// console.log(tuki.next()); // {}
// console.log(tuki.next('Carlos')); // {}
// console.log(tuki.next()); // {}

// loop infinito COntrolado! 
// function* numbers(){
//     let num=1;

//     while(true){
//         yield numnum +=1
//     }
// }

// const num2 = numbers();
// console.log(num2.next());
// console.log(num2.next());
// console.log(num2.next());


// const promise = new Promise((res, rej) => {
//     res('holi')
// })

// // como se hace como una promesa 

// // promise
// //     .then(
// //         value => console.log(value),
// //         reason => console.log(reason)
// //     )


// // como resuelvo una promesa? quien se encarga el success handler
// async function hola(){
//     const result = await promise.then(value => console.log(value))
//     return result
// }

// console.log(hola())


// // flecha 

// const asyncCall = async() => {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result)
// }

// console.log(asyncCall());


// ahora con promise all

const alumnos = ['ivan', 'maria', 'animal']

const promises = alumnos.map(
    alumno => new Promise(resolve => setTimeout(
        () => resolve(alumno)
    ), 2000 )
)

console.log(promises);

// basicamente vamos a volver ese array en un array de promesas y las vamos a resolver todas de una sola vez.

// ahora las resolvemos

Promise.all(promises)
        .then(
            values => console.log(values)
        )