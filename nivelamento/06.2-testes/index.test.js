//CommonJS
const assert = require('assert')
// import assert from 'assert'

// ==
assert.equal(2, '2')

// === 
assert.strictEqual(2, 2)

// // obje1 === obje2
// Para comparar Objetos e Array
const pessoa = { nome: '2' }
const fulano = pessoa
const ciclano = pessoa
assert.deepStrictEqual(fulano, ciclano)