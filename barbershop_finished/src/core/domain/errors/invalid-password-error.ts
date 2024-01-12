export class InvalidPasswordError extends Error {
  constructor() {
    super("Password invalid format")
  }
}