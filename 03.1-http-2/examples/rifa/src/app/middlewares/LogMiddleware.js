class LogMiddleware {
  static handler(req, res, next) {
    const result = `
      A requisiçao foi: ${req.host}
      O método http foi: ${req.method}
      body: ${JSON.stringify(req.body)}
      params: ${JSON.stringify(req.params)}
      query: ${JSON.stringify(req.query)}
    `

    console.log(result)
    console.log(req)

    next()
  }
}

export { LogMiddleware }