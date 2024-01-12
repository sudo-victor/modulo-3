import { CustomerAlreadyExistsError } from "@/core/usecases/errors/customer-already-exists-error"
import { CreateCustomerUseCase } from "./create-customer-use-case"
import { CustomerRepositoryInMemory } from "@/infra/database/in-memory/customer-repository-in-memory"
import { HasherFaker } from "test/fakers/hasher-faker"

let customerRepository: CustomerRepositoryInMemory
let sut: CreateCustomerUseCase

describe("[Use Case] Create Customer", () => {

  beforeEach(() => {
    const hasher = new HasherFaker()
    customerRepository = new CustomerRepositoryInMemory()
    sut = new CreateCustomerUseCase(customerRepository, hasher)
  })

  it("should be able to create a customer", async () => {
    const input = {
      name: "Georgina Soares",
      email: "gina@email.com",
      password: "123456",
      cpf: "115.598.810-89",
      phone: "21998200330"
    }
    await sut.execute(input)
    expect(customerRepository.items).toHaveLength(1)
    expect(customerRepository.items[0].id.toValue()).toBeDefined()
  })

  it("should not be able to create a customer with an existent email", async () => {
    const input = {
      name: "Georgina Soares",
      email: "gina@email.com",
      password: "123456",
      cpf: "115.598.810-89",
      phone: "21998200330"
    }
    await sut.execute(input)
    expect(() => sut.execute(input)).rejects.toBeInstanceOf(CustomerAlreadyExistsError)
  })
})