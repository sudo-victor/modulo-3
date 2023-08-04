const { FuncionarioRepository } = require()

const mongdb = []

const funcionarioRepository = new FuncionarioRepository(mongdb)

funcionarioRepository.create({ 
  nome: "Func1",
  dataNascimento: "12/12/1212",
  salario: "12323",
})

console.log(funcionarioRepository.findAll())
