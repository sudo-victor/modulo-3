const { UserService, UserRepository } = require('../src/user')

const repository = new UserRepository()
const service = new UserService(repository)

test("#UserService.create deve ser capaz de criar um usário", () => {
  const mock = { email: 'foo@bar.com', password: '1234' }
  jest.spyOn(repository, 'findByEmail').mockReturnValue(null)
  jest.spyOn(repository, 'create').mockReturnValue(mock)

  const result = service.create(mock)

  expect(result.email).toBe('foo@bar.com')
  expect(result.password).toBe('1234')
})

test("#UserService.create deve ser capaz de retornar um erro, caso user existir", () => {
  const mock = { email: 'foo@bar.com', password: '1234' }
  jest.spyOn(repository, 'findByEmail').mockReturnValue(mock)

  const result = () => service.create(mock)

  expect(result).toThrow('User foo@bar.com already exists')
})