
function makeError(message: string, status: number) {
  return {
    error: true,
    message,
    status
  }
}

export { makeError }