export class CustomerAlreadyExistsError extends Error {
  constructor() {
    super("Customer already exists")
  }
}