import test from "node:test";
import assert from "node:assert";

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

test("Run Recursive Range Test", () => {
  assert.strictEqual(recursiveRange(10), 55);
});
