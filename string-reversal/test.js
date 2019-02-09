const reverseMethods = require("./index");

const {
  reverseStringUsingReverse,
  reverseStringUsingReduce,
  reverseStringUsingForLoop
} = reverseMethods;

test("Reverses a string", () => {
  expect(reverseStringUsingReverse("testing123")).toBe("321gnitset");
});

test("Reverses a string with spaces at the end or beginning", () => {
  expect(reverseStringUsingReverse("  testing123")).toBe("321gnitset  ");
});

test("Reverses a string", () => {
  expect(reverseStringUsingReduce("testing123")).toBe("321gnitset");
});

test("Reverses a string with spaces at the end or beginning", () => {
  expect(reverseStringUsingReduce("  testing123")).toBe("321gnitset  ");
});

test("Reverses a string", () => {
  expect(reverseStringUsingForLoop("testing123")).toBe("321gnitset");
});

test("Reverses a string with spaces at the end or beginning", () => {
  expect(reverseStringUsingForLoop("  testing123")).toBe("321gnitset  ");
});
