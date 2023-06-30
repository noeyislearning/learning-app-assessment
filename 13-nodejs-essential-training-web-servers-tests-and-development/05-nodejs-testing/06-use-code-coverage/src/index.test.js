const mockApp = require("./app");
require("./index.js");

jest.mock("./app");

describe("index.js - App Entry", () => {
  it("Should call app.listen()", () => {
    expect(mockApp.listen).toHaveBeenCalled();
  })
});