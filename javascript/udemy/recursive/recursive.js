import test from "node:test";
import assert from "node:assert";

function countNum(num) {
  if (num <= 0) {
    console.log("Done!");
    return undefined;
  }
  console.log(num);
  num--;
  countNum(num);
}

test("Run Count Num Test", () => {
  assert.strictEqual(countNum(5), undefined);
});

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/*
Call Stack
sumRange(3)
    3 + sumRange(3-1) // 2 => 6
              2 + sumRange(2-1) // 1 => 3
                      if num === 1 return 1 // 1
*/

test("Run Sum Range Test", () => {
  assert.strictEqual(sumRange(3), 6);
});

function factorialRecursive(num) {
  if (num === 1) return 1;
  console.log(num);
  return num * factorialRecursive(num - 1);
}

/*
Factorial
factorialRecursive(4)
    4 * factorialRecursive(4-1) => 24
              3 * factorialRecursive(3-1) => 6
                           2 * factorialRecursive(2-1) => 2
                                        if num === 1 return 1 // 1
*/

test("Run Factorial Test", () => {
  assert.strictEqual(factorialRecursive(4), 24);
});
