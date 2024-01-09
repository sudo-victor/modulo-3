import axios from "axios";
import supertest from "supertest"
import { describe, it, expect } from "vitest";
import { app } from "../../src/server";

const api = supertest(app)

describe("Profile Routes", () => {
  // it.only("deve ser capaz de criar um perfil de usuário", async () => {
  //   const data = {
  //     fullname: "Victor",
  //     bio: "blablabla",
  //     education: "Arnia",
  //     certifications: "Arnia",
  //     currentOccupation: "Dev",
  //     status: "open to work",
  //   }
  //   const response = await axios.post("http://localhost:3333/profiles", data)
  //   expect(response.status).toEqual(200)
  //   expect(response.data._id).toBeDefined()
  // })
  it.only("deve ser capaz de criar um perfil de usuário", async () => {
    const data = {
      fullname: "Victor",
      bio: "blablabla",
      education: "Arnia",
      certifications: "Arnia",
      currentOccupation: "Dev",
      status: "open to work",
    }

    api
      .post("/profiles")
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
   
  })
  it("nao deve ser capaz de criar um perfil de usuário se o status for inválido")
  it("nao deve ser capaz de criar um perfil de usuário caso tenha um erro interno")
})