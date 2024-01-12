import { Customer } from "@/appointment/enterprise/entities/customer"
import { Encrypt } from "../cryptography/encrypt"
import { CustomerRepository } from "../repositories/customer-repository"
import { CustomerAlreadyExistsError } from "@/core/usecases/errors/customer-already-exists-error"

export class CreateCustomerUseCase {
  constructor(private customerRepository: CustomerRepository, private hasher: Encrypt) {}

  async execute (input: Input) {
    const customerExists = await this.customerRepository.findByCpf(input.cpf)
    if (customerExists) {
      throw new CustomerAlreadyExistsError()
    }

    const customerToPersit = Customer.create({
      ...input,
      password: this.hasher.encrypt(input.password)
    })
    await this.customerRepository.save(customerToPersit)
  }
}

type Input = {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
}