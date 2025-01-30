import test from "node:test";
import assert from "node:assert";

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

test("Run Factorial Test", () => {
  assert.deepEqual(factorial(4), 24);
});
