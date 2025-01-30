import test from "node:test";
import assert from "node:assert";

function flatten(arr, result = []) {
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatten(val, result);
    } else {
      result.push(val);
    }
  }

  return result;
}

test("Run Flatten Test", async (t) => {
  await t.test("test 1", () => {
    assert.deepEqual(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);
  });

  await t.test("Should return false", () => {
    assert.deepEqual(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]);
  });
});
