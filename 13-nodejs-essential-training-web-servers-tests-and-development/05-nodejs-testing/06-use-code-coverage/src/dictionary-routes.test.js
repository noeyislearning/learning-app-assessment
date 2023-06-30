const express = require("express")
const dictionaryRoutes = require("./dictionary-routes");
const { save } = require("./lib");
const request = require("supertest");

jest.mock("./lib", () => ({
  save: jest.fn(),
}))

jest.mock("../data/skiTerms.json", () => [
  { term: "Rip", defined: "To move at a high rate of speed" },
  { term: "Rip", defined: "To move at a high rate of speed" },
  { term: "Rip", defined: "To move at a high rate of speed" },
]);

const app = express();

app.use("/dictionary", dictionaryRoutes);

describe("[TEST] dictionary-routes.js", () => {
  it("GET /dictionary - [SUCCESS]", async () => {
    const { body } = await request(app).get("/dictionary");
    expect(body).toEqual([
      { term: "Rip", defined: "To move at a high rate of speed" },
      { term: "Rip", defined: "To move at a high rate of speed" },
      { term: "Rip", defined: "To move at a high rate of speed" },
    ]);
  });

  it("DELETE /dictionary/Rip - [SUCCESS]", async () => {
   const{ body } = await request(app).delete("/dictionary/Rip");
    expect(body).toEqual({
      status: "success",
      removed: "Rip",
      newLength: 0
    })
    expect(save).toHaveBeenCalledWith([
      { term: "Rip", defined: "To move at a high rate of speed" },
      { term: "Rip", defined: "To move at a high rate of speed" },
    ]);
  });
});