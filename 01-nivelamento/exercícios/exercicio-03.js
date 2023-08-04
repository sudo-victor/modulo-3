// Crie 3 entidades: Funcionário, Gerente e Desenvolvedor

let idCount = 0

class Funcionario {
  constructor(data) {
    this.nome = data.nome;
    this.dataNascimento = data.dataNascimento;
    this.salario = data.salario;
    this.createdAt = new Date();
    this.code = ++idCount
  }
}

class Gerente extends Funcionario {
  constructor(data) {
    super(data)
    this.departamento = data.departamento
  }
}

class Desenvolvedor extends Funcionario {
  constructor(data) {
    super(data)
    this.tecnologia = data.tecnologia
  }
}

// const func1 = new Funcionario({ 
//   nome: "Func1",
//   dataNascimento: "12/12/1212",
//   salario: "12323",
//  })

//  const gerente1 = new Gerente({ 
//    nome: "Gerente1",
//    dataNascimento: "12/12/1212",
//    salario: "12323",
//    departamento: "TI",
//  })

// const dev1 = new Desenvolvedor({ 
//   nome: "Desenvolvedor",
//   dataNascimento: "12/12/1212",
//   salario: "12323",
//   tecnologia: "Javascript",
// })


// Crie um repositório para cada entidade: FuncionarioRepository, GerenteRepository e DesenvolvedorRepository
// Deve ser possível:
// - Criar;
// - Editar;
// - Buscar por código;
// - Deletar.

class FuncionarioRepository {
  constructor(database) {
    this.database = database
  }

  create(data) {
    const funcionario = new Funcionario(data)
    this.database.push(funcionario)
    return funcionario
  }

  update(code, data) {
    const funcionario = this.database.find((func) => func.code === code)

    if (!funcionario) {
      return "Funcionario nao encontrado"
    }

    Object.assign(funcionario, data)
    return funcionario
  }

  findAll() {
    return this.database
  }

  findByCode(code) {
    return this.database.find((func) => func.code === code)
  }
}

const mongdb = []
const mysql = []

const funcionarioRepository = new FuncionarioRepository(mysql)

funcionarioRepository.create({ 
  nome: "Func1",
  dataNascimento: "12/12/1212",
  salario: "12323",
})
