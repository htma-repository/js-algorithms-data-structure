import test from "node:test";
import assert from "node:assert";

function reverse(str) {
  let result = [];
  let n = str.length;
  let i = 0;

  function reverseFunc(str, index, n) {
    if (index === n) {
      return;
    }
    let temp = str[index];
    reverseFunc(str, index + 1, n);
    result.push(temp);
  }

  reverseFunc(str, i, n);

  return result.join("");
}

test("Run Reverse Test", () => {
  assert.strictEqual(reverse("awesome"), "emosewa");
});
