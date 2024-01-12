import { Entity } from "@/core/domain/entity";
import { UniqueId } from "@/core/domain/unique-id";
import { Cpf } from "../value-objects/cpf";
import { Password } from "../value-objects/password";

export interface CustomerProps {
  name: string;
  cpf: Cpf;
  email: string;
  password: Password;
}

interface CreateCustomerProps {
  name: string;
  cpf: string;
  email: string;
  password: string;
}


export class Customer extends Entity<CustomerProps> {
  get cpf() {
    return this.props.cpf
  }

  static create(props: CreateCustomerProps, id?: UniqueId) {
    return new Customer({
      ...props,
      cpf: new Cpf(props.cpf),
      password: new Password(props.password),
    }, id)
  }
}