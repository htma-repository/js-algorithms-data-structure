import { test } from "bun:test";
import assert from "node:assert";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currVal;
    }
  }

  // for (let i = 1; i < arr.length; i++) {
  //   for (let j = i; j > 0; j--) {
  //     if (arr[j - 1] > arr[j]) {
  //       let temp = arr[j];
  //       arr[j] = arr[j - 1];
  //       arr[j - 1] = temp;
  //     } else {
  //       break;
  //     }
  //   }
  // }

  return arr;
}

test("Insertion Sort Test", () => {
  assert.deepEqual(
    insertionSort([7, 4, 6, 9, 1, 3, 2, 5, 8]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});
