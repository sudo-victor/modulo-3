
interface MakeErrorResponse {
  error: boolean;
  message: string | string[];
  status: number;
}

function makeError(message: string, status: number) {
  return {
    error: true,
    message,
    status
  }
}

export { makeError, MakeErrorResponse }