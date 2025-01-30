import test from "node:test";
import assert from "node:assert";

function nestedEvenSum(obj) {
  let arr = [];
  let result = 0;

  function nestedEvenSumFunc(obj, arr) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const element = obj[key];
        nestedEvenSumFunc(element, arr);
      } else if (obj[key] % 2 === 0) {
        console.log(obj[key]);
        arr.push(obj[key]);
      }
    }
  }

  nestedEvenSumFunc(obj, arr);

  result = arr?.reduce((prev, curr) => prev + curr, 0);

  return result;
}

test("Run Capitalize First Test", () => {
  let obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };

  assert.strictEqual(nestedEvenSum(obj2), 10);
});
