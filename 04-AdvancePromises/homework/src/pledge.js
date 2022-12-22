'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
class $Promise{
    constructor(executor){
        if(typeof executor !== 'function') throw TypeError('Executor must be a function')
        this._state = 'pending';
        this._value = undefined;
        this._handlerGroups = [];

        const callHandlers = () => {
            // handlerGropups ---> [{successCB, errarCb},{successCB, errarCb}, {successCB, errarCb}]
            //primer camino succes
            const currentHandler = this._handlerGroups.shift(); // {successCB, errarCb}
            while(this._handlerGroups.length) {
                // const current === this._handleGroups.shift();
                //const currentHandler = this._handlerGroups.shift(); 
                const {successCb, errorCb, downstreamPromise} = this._handlerGroups.shift();
                if(this._state === 'fulfilled') {
                    // si no tengo un successHandler
                    if(!successCb) downstreamPromise._internalResolve(value)
                    else {
                        try {
                            // si tengo un successhandler
                            const result = successCb(value)
    
                            if(result instanceof $Promise){
                                resolve
                                    .then(
                                        value => downstreamPromise._internalResolve(value),
                                        reason => downstreamPromise._internalReject(reason)
                                    )
                            }
                            else {
                                // si retorna un valor
                                downstreamPromise._internalResolve(value)
                            }
                        } catch (error) {
                            // Si arroja un error, como sabe?
                            downstreamPromise._internalReject(error)
                        }
                    }
                }

                if(this._state === 'rejected') {
                    if(!errorCb) downstreamPromise._internalReject(value)
                    else{
                        try {
                            const result = errorCb(value)

                            if(result instanceof $Promise){
                                result
                                .then(
                                    value => downstreamPromise._internalResolve(value),
                                    reason => downstreamPromise._internalReject(reason)
                                )
                            }
                            else downstreamPromise._internalResolve(result)
                        } catch (error) {
                            downstreamPromise._internalReject(error)
                        }
                    }
                }

                // this._state === 'fulfilled' && currentHandler.successCb && currentHandler.successCb(); // AQUI CORROBORA SI ES succes sino lo es, ignora 
                // //segundo camino reject
                // this._state === 'rejected' && currentHandler.errorCb && currentHandler.errorCb()
            }
        }

        this._internalResolve = (value) => {
            if(this._state !== 'pending') return;
            this._state = 'fulfilled'
            this._value = value;
            callHandlers(this._value)
        }

        this._internalReject = (reason) => {
            if(this._state !== 'pending') return;
            this._state = 'rejected'
            this._value = reason;
            callHandlers(this._value)
            
        }

        const resolve = (value) => {this._internalResolve(value)}

        const reject = (reason) => {this._internalReject(reason)}
        
        executor(resolve, reject)

        // .then es publico puedo acceder 
        this.then = (successHandler, errorHandler) => {
            const downstreamPromise = new $Promise(() => {})
            const handlerGroup = {
                successCb: typeof successHandler === 'function' ? successHandler : false, // verificando que sea un callback
                errorCb: typeof errorHandler === 'function' ? errorHandler : false,
                downstreamPromise
            }

            this._handlerGroups.push(handlerGroup)
            this._state !== 'pending' && callHandlers(this._value)

            return downstreamPromise
            //return new $Promise(() => {})
        }

        // un catch es un then pero solo con el errorhandler
        this.catch = (errorHandler) => {
            return this.then(null, errorHandler)
        }
    }

    static resolve() { // se resuelve solamente
        if(value instanceof $Promise) return value;

        const promise = new $Promise(() => {})
        promise._internalResolve(value)
        return promise;
    }

    static all(array){ // se resuelve Exitosamente! / es el promise.all un array de promesas
        if(!Array.isArray(array)) throw TypeError('Argument must be array')

    }
}

// try {
//     // resolver lo que haya...
//     // resolver lo que haya...
//     // resolver lo que haya... Hubo error!
//     // resolver lo que haya...
// } catch (error) {
//     console.log(error) 
// }

// Metodos estaticos netamente de la clase, propios.module ESTATICOS = CLASE
// Metodos dinamicos, metodos de instancia. promise. (cubitos) DINAMICOS = INSTANCIA


module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
