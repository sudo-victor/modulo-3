class CommonError {
  static build(message, status) {
    return {
      error: true,
      message,
      status
    }
  }
}

export { CommonError }