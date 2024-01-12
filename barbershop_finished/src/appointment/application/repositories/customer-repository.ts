import { Customer } from "@/appointment/enterprise/entities/customer";

export interface CustomerRepository {
  findByCpf(cpf: string): Promise<Customer | undefined>
  save(customer: Customer): Promise<void>
}
