class MiddlewareLog {
  static handler(req, res, next) {
    const { headers, query, body, params, method } = req

    if (headers.teste !== "ok") {
      res.status(400).json({ error: true, message: "Deu ruim" })
    }
  
    const template = `
      headers: ${JSON.stringify(headers)}
      query: ${JSON.stringify(query)}
      body: ${JSON.stringify(body)}
      params: ${JSON.stringify(params)}
      method: ${method}
      feito em ${new Date()}
    `
  // // imutavel
  // // 
  //   Object.freeze({})
  
    req.user = { name: "Victor" }
  
    console.log(template)
    next()
  }
}
export { MiddlewareLog }