import test from "node:test";
import assert from "node:assert";

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

/*
productOfArray([1, 2, 3, 10])
          1 * productOfArray([2, 3, 10]) => 60
                        2 * productOfArray([3, 10]) => 60
                                    3 * productOfArray([10]) => 30
                                                10 * productOfArray([]) => 10
                                                              if arr.length === 0 return 1 => 1

*/

test("Run Product Of Array Test", () => {
  assert.strictEqual(productOfArray([1, 2, 3, 10]), 60);
});
