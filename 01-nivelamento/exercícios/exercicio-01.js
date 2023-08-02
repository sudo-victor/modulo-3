const repository = []
let idCount = 0

function makeCar(modelo, cor, ano) {
  return { id: ++idCount, modelo, cor, ano, createdAt: Date.now() }
}

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
  const car = makeCar(modelo, cor, ano)

  repository.push(car)

  return car
}

const carro1 = createCar('stepway', 'cinza', 2019)
const carro2 = createCar('stepway', 'cinza', 2019)

// // Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// // Parametros: id(string) 
// // Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
  return repository.find((car) => car.id === id)
}

// // Crie uma funçao que retorna todos os carros
// // Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository
}

// // Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// // Parametros: id(string), modelo(string), cor(string), ano(number)
// // Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
  const currentCar = findCarById(id)

  if (!currentCar) {
    return 'Carro nao encontrado'
  }
  
  Object.assign(currentCar, {
    modelo,
    cor,
    ano
  })

  return currentCar
}
updateCarById(2, 'Sandero', 'Preto', 2015)

// // Crie uma funçao que remove um carro do repositorio
// // Parametros: id(string)
function deleteCarById(id) {
  const carIndex = repository.findIndex((car) => car.id === id)

  if (carIndex < 0) {
    return 'Carro nao encontrado'
  }

  repository.splice(carIndex, 1)
}
deleteCarById(2)
console.log(repository)
