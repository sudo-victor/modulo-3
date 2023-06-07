# Stub
Um stub é um objeto que substitui um objeto real e fornece respostas pré-definidas durante os testes. Ele é usado para simular comportamentos específicos sem a necessidade de uma implementação completa. Os stubs são úteis quando você deseja controlar diretamente as respostas de uma dependência para testar diferentes cenários.

Exemplo de uso de um stub com Jest em Node.js:

```javascript

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  create(user) {
    const userAlreadyExists = this.repository.findByEmail(user.email);
    if(userAlreadyExists) {
      throw new Error('User already exists')
    }

    return this.repository.create(user)
  }
}

class UserRepository {
  users = []

  findByEmail(email) {
    console.log('UserRepository - findByEmail')
    return this.users.find(user => user.email === email)
  }

  create(user) {
    console.log('UserRepository - create')
    this.users.push(user)
    return user
  }
}

module.exports = { UserService, UserRepository }

```

```javascript
// Arquivo de teste: app.test.js
const { UserRepository, UserService } = require('../app')

const repository = new UserRepository()
const sut = new UserService(repository)

test("#UserService deve ser possível criar um usuario", () => {
  const mock = { email: 'victor@email.com' }

  jest.spyOn(repository, 'findByEmail').mockReturnValue(null)
  jest.spyOn(repository, 'create').mockReturnValue(mock)

  const result = sut.create(mock)

  expect(result.email).toBe(mock.email)
})

```
