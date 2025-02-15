import { test } from "bun:test";
import assert from "node:assert";

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

test("Run Linear Search Test", () => {
  assert.deepEqual(linearSearch([10, 15, 20, 25, 30], 15), 1);
});
