import { RaffleRepository } from "./RaffleRepository.js"
import { jest } from "@jest/globals"

const modelMock = {
  create: (raffle) => {},
  findById: (id) => {},
  update: (id, data) => {},
}
const sut = new RaffleRepository(modelMock)

describe('RaffleRepository', () => {
  describe('create', () => {
    it('should be able to create a raffle', async () => {
      jest.spyOn(modelMock, 'create').mockReturnValue({
        "id": "123123123",
        "title": "Teste 2",
        "valueMin": 500,
        "valueMax": 600,
        createdAt: "2015-06-12"
      })

      const body = {
        "title": "Teste 2",
        "valueMin": 500,
        "valueMax": 600
      }

      const result = await sut.create(body)

      const expected = {
        "id": "123123123",
        "title": "Teste 2",
        "valueMin": 500,
        "valueMax": 600,
        createdAt: "2015-06-12"
      }

      expect(result).toEqual(expected)
    })
  })
})