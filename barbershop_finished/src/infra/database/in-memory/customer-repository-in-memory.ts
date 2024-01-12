import { CustomerRepository } from "@/appointment/application/repositories/customer-repository";
import { ICustomer } from "../mongo/customer";
import { Customer } from "@/appointment/enterprise/entities/customer";

export class CustomerRepositoryInMemory implements CustomerRepository {
  items: Customer[] = []

  async findByCpf(cpf: string): Promise<Customer | undefined> {
    return this.items.find((customer: Customer) => customer.cpf.isEqualTo(cpf))
  }

  async save(customer: Customer): Promise<void> {
    this.items.push(customer)
  }
}