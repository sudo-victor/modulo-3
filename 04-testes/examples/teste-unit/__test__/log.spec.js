const logger = require('../src/logger')

describe("Logger", () => {
  it("should be called 2 times", () => {
    const spy = jest.spyOn(logger, 'log')
  
    logger.log("HELLO")
    logger.log("HELLO")
  
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith("HELLO")
  })
})
