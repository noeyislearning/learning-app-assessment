const countLetters = (char, str) => str.split("").filter(l => char === l).length;

describe("TDD Example", () => {
  it("Counts letters correctly", () => {
    const results = countLetters("p", "happy");
    expect(results).toEqual(2);
  });
});