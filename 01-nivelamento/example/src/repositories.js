const { Funcionario } = require("./entities")

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

module.exports = {
  FuncionarioRepository
}
