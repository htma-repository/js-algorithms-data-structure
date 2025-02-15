/*

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

*/

import { test } from "bun:test";
import assert from "node:assert";

function removeDuplicate(arr) {
  let obj = {};

  // catch the last duplicate element
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }

  console.log(obj);

  let newArr = [];

  for (let j = 0; j < arr.length; j++) {
    let currentValue = arr[j];
    if (obj[currentValue] === j) {
      newArr.push(currentValue);
    }
  }

  console.log(newArr);

  return newArr;
}

test("Remove Duplicates Test", () => {
  assert.deepEqual(removeDuplicate([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
});
