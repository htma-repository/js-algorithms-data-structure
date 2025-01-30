import test from "node:test";
import assert from "node:assert";

function pureRecursiveEvenNum(arr) {
  let result = [];

  if (arr.length === 0) return result;

  let num = arr[0];
  if (num % 2 === 0) {
    result.push(num);
  }

  result = result.concat(pureRecursiveEvenNum(arr.slice(1)));

  return result;
}

test("Run Pure Recursion Is Even Test", () => {
  assert.deepEqual(
    pureRecursiveEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [2, 4, 6, 8, 10]
  );
});
