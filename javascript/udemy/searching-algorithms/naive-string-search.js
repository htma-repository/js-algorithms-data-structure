import test from "node:test";
import assert from "node:assert";

function stringSearch(longStr, shortStr) {
  let match = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) break;
      else if (j === shortStr.length - 1) {
        match++;
      }
    }
  }
  return match;
}

test("Run String Search Test", () => {
  assert.strictEqual(stringSearch("wowomgzomg", "omg"), 2);
});
