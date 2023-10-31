const crypto = require("crypto")

crypto.randomUUID()

const repository = []
let idCount = 0

function makeCar(modelo, cor, ano) {
  return {
    id: crypto.randomUUID(),
    modelo,
    cor,
    ano,
    createdAt: new Date()
  }
}

console.log(makeCar('stepway', 'cinza', 2019))

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
    const car = {
      id: idCount++,
      modelo,
      cor,
      ano,
      createdAt: new Date()
    }

    repository.push(car)

    return car
}

const carro1 = createCar('stepway', 'cinza', 2019)
const carro2 = createCar('creasdlkasjdh', 'cinza', 2019)
// console.log(repository)

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string) 
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
  return repository.find((item) => item.id === id)
}
// console.log(findCarById(3))

// Crie uma funçao que retorna todos os carros
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository
}

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
  // buscar o carro pelo id
  const carro = findCarById(id)

  // retornar um erro caso nao encontre
  if(!carro) {
    // error
    console.log("DEU RUIM")
    return repository
  }

  // atualizar
  Object.assign(carro, { modelo, cor, ano })
}
updateCarById(1, 'Sandero', 'Preto', 2015)
// console.log(repository)

// const pessoa = !{ nome: 'victor' }

// null undefined false 0< ""
// !! -> transformar o valor no boolean
// ! -> transformar o valor boolean e troca

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {
  const index = repository.findIndex((item) => item.id === id)

  if (index < 0) {
    console.log('error')
    return
  }

  repository.splice(index, 1)
}
deleteCarById(0)
console.log(repository)
