const session = require('supertest-session');
const app = require('../index.js'); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe('Test de APIS', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    it('responds with and object with message `hola`', () =>
        agent.get('/').then((res) => {
          expect(res.body.message).toEqual('hola');
        }));
  });

  describe('GET /test', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with and object with message `test`', () =>
      agent.get('/test').then((res) => {
        expect(res.body.message).toEqual('hola');
      }));
  });

  describe('POST /sum', () => {
    it('responds with 200', () => agent.post('/sum').expect(200));
    it('responds with the sum of 2 and 3', () =>
      agent.post('/sum')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(5);
        })
    );
  });

  describe('POST /product', () => {
    it('responds with 200', () => agent.post('/product').expect(200));
    it('responds with the product of 2 and 3', () =>
      agent.post('/product')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(6);
        })
    );
  });

  describe('POST /sumArray', () => {
    it('responds with 200', () => agent.post('/test').expect(200));
    it('responds true if a combination of two numbers get the target`', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 13})
        .then((res) => {
          expect(res.body.result).toEqual(true);
      }));
  });
  // hecho desde cero
  it('responde con false si hay una combinacion validad', () => {
    return agent.post('/sumArray')
    .send({ array: [1,2,3,4,5], num: 3001})
    .then(
      res => expect(res.body.result).toEqual(false)
    )

  })

  it('No debe sumar 2 veces el mismo numero', () =>{
    return agent.post('/sumArray')
    .send({ array: [1,2,3,4,5], num: 2})
    .then(
      res => expect(res.body.result).toEqual(false)
    )
  })

  describe('Post /numString', () => {
    it('responde con status 200', () => {
      return agent.post('/numString')
      .send({ str: 'tuki'})
      .expect(200)
    })

    it('response con 4 enviamos hola', () => {
      return agent.post('/numString')
      .send({ str: ' hola' })
      .then(
        res => expect(res.body.result).toBe(4)
      )
    })

    it('responde con status 400 si el string es un numero', () => {
      return agent.post('/numString')
      .send({str: 7})
      .expect(400)
    })

    it('responde con estatus 400 si el estring esta vacio', () => {
      return agent.post('/numString')
      .send({ str: ''})
      .expect(400)
    })
  })

  describe('POST /puck', () => {
    it('respode con status 200', () => {
      return agent.post('/pluck')
      .send({
        array: [{name: 'dani', name: 'ayenln', name: 'jajaja'}],
        name: 'name'
      })
      .expect(200)
    })

    it('responde con la funcionalidad del pluck', () => {
      return agent.post('/pluck')
      .send({
        array: [{name: 'dani', name: 'ayenln', name: 'jajaja'}],
        name: 'name'
      })
      .then(
        res => expect(res.body.result).toEqual([])
      )
    })

    it('responde con status 400 si el array no es un array', () => {
      return agent.post('/pluck')
      .send({ array: 'tuki', name: 'name'})
      .expect(400)
    })

    it('responde con estatus 400 si  string propiedad esta vacia')
  })

});

