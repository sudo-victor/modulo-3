

// nome -> string
// dataNascimento -> string
// salario -> number
class Funcionario {
  constructor(nome, dataNascimento, salario) {
    this.code = String(new Date().getTime()) + String(Math.random());
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.salario = salario;
    this.createdAt = new Date()
  }
}

// departamento -> string
class Gerente extends Funcionario {
  constructor(nome, dataNascimento, salario, departamento) {
    super(nome, dataNascimento, salario)
    this.departamento = departamento;
  }
}

const gerente = new Gerente('Mauro', '12-12-1212', 10000, 'TI')
// console.log(gerente)

// linguagem -> string
class Desenvolvedor extends Funcionario {
  constructor(nome, dataNascimento, salario, linguagem) {
    super(nome, dataNascimento, salario)
    this.linguagem = linguagem;
  }
}

const dev = new Desenvolvedor('Mauro', '12-12-1212', 10000, 'Java')
// console.log(dev)

// const maria = new Gerente("Maria", '20-05-1995', 8000, "Vendas");
// const joao = new Desenvolvedor("João",'20-05-1995', 5000, "JavaScript");

// console.log(maria.nome); // "Maria"
// console.log(joao.idade); // 25

// Crie um repositório para Funcionario, Gerente e Desenvolvedor
// Deve ser possível:
// - Criar;
// - Editar;
// - Buscar por código;
// - Deletar.

const databaseGerente = []
const databaseFuncionario = []

class BaseRepository {
  constructor(database) {
    this.database = database
  }

  create(data) {
    throw new Error('Method not implemented')
  }

  update(code, data) {
    throw new Error('Method not implemented')
  }

  findByCode(code) {
    return this.database.find((i) => i.code === code)
  }

  Delete(code) {
    const itemIndex = this.database.findIndex((i) => i.code === code)

    this.database.splice(itemIndex, 1)

    return true
  }
}

class FuncionarioRepository extends BaseRepository {
  constructor(database) {
    super(database)
  }

  create(data) {
    const funcionario = new Funcionario(data.nome, data.dataNascimento, data.salario)
    this.database.push(funcionario)
    return funcionario;
  }

  update(code, data) {
    const currentItem = this.database.find((i) => i.code === code)
    Object.assign(currentItem, data)
    return currentItem;
  }
}

const funcionarioRepository = new FuncionarioRepository(databaseFuncionario)
const funcionarioRepository2 = new FuncionarioRepository(databaseGerente)
const teste = funcionarioRepository.create({ nome: 'Joao', dataNascimento: '12-12-12', salario: 123123})
funcionarioRepository2.create({ nome: 'Cesar', dataNascimento: '12-12-12', salario: 123123})
console.log(funcionarioRepository.findByCode(teste.code))


