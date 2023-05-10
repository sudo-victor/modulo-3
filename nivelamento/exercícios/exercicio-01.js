const repository = []
let idCount = 0

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
  // criar o carro
  idCount++;

  // sintax sugar

  const carro = {
    id: idCount,
    modelo,
    cor,
    ano,
    createdAt: new Date()
  }

  // adicionar no repositorio
  repository.push(carro)

  // retornar o carro criado
  return carro;
}

const carro1 = createCar('stepway', 'cinza', 2019)
const carro2 = createCar('stepway', 'cinza', 2019)

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string) 
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
  return repository.find((c) => {
    return c.id === id
  })
}

// Crie uma funçao que retorna todos os carros
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository
}

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
  // buscar o carro por id
  const currentCar = findCarById(id)

  // atualizar
  Object.assign(currentCar, { modelo, cor, ano, updatedAt: new Date()  })

  // retornar o obj atualizado
  return currentCar
}
updateCarById(2, 'Sandero', 'Preto', 2015)

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {
  // buscar o carro por id o index
  const currentIndex = repository.findIndex((c) => c.id === id)
  // remover o carro
  repository.splice(currentIndex, 1)
}
deleteCarById(1)
console.log(findAllCars())

