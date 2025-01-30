import test from "node:test";
import assert from "node:assert";

function helperMethodRecursionIsEven(arr) {
  let result = [];

  function isEven(arrData) {
    if (arrData.length === 0) return;
    let num = arrData[0];
    if (num % 2 === 0) {
      result.push(num);
    }
    isEven(arrData.slice(1));
  }

  isEven(arr);

  return result;
}

test("Run Helper Method Recursion Is Even Test", () => {
  assert.deepEqual(
    helperMethodRecursionIsEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [2, 4, 6, 8, 10]
  );
});
