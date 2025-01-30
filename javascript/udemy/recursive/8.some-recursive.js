import test from "node:test";
import assert from "node:assert";

function someRecursive(arr, cb) {
  let result = false;

  function someRecursiveFunc(arr, cbFunc) {
    if (arr.length === 0) return;

    result = cbFunc(arr[0]);

    if (result) return;

    let temp = arr.slice(1);
    someRecursiveFunc(temp, cbFunc);
  }

  someRecursiveFunc(arr, cb);

  return result;
}

test("Run Some Recursive Test", async (t) => {
  function isOdd(val) {
    return val % 2 !== 0;
  }

  await t.test("Should return true", () => {
    assert.strictEqual(someRecursive([1, 2, 3, 4], isOdd), true);
  });

  await t.test("Should return false", () => {
    assert.strictEqual(someRecursive([4, 6, 8], isOdd), false);
  });
});
