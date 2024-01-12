export class InvalidCpfError extends Error {
  constructor() {
    super("Cpf invalid format")
  }
}