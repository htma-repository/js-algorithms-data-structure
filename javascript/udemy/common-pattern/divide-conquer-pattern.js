//Divide & Conquer Pattern
// O(n) time complexity

import test from "node:test";
import assert from "node:assert";

function search(arr, num) {
  // O(n)
  // let result = 0;
  // if (arr.length < num) return -1;
  // for (const [i, val] of arr.entries()) {
  //   if (num === val) {
  //     result = i;
  //   }
  // }
  // return result;

  // O(log n)
  // Binary Search (MUST sorted)
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let currentElement = arr[middleIndex];

    if (currentElement < num) {
      minIndex = middleIndex + 1;
    } else if (currentElement > num) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
}

test("Search Test", async (t) => {
  await t.test("must return 6", () => {
    assert.deepEqual(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7), 6);
  });

  await t.test("must return 3", () => {
    assert.deepEqual(search([1, 2, 3, 4, 5, 6], 4), 3);
  });

  await t.test("must return 5", () => {
    assert.deepEqual(search([1, 2, 3, 4, 5, 6], 6), 5);
  });

  await t.test("must return -1", () => {
    assert.deepEqual(search([1, 2, 3, 4, 5, 6], 11), -1);
  });
});
