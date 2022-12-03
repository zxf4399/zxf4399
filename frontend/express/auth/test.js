const request = require("supertest")

const app = require(".")

describe("auth", () => {
  describe("GET /", () => {
    it("should redirect to /login", (done) => {
      request(app).get("/").expect("Location", "/login").expect(302, done)
    })
  })
})
