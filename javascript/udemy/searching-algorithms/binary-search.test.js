import { test } from "bun:test";
import assert from "node:assert";

function binarySearch(arr, num) {
  // get left index & right index of sorted array
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // do looping with while loop, while leftIndex less than or equal rightIndex
  while (leftIndex <= rightIndex) {
    // get middleIndex with (leftIndex + rightIndex) / 2 & do Math.floor to round the number
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // get currentValue from the array accessing with middleIndex
    let currentValue = arr[middleIndex];

    // check if currentValue less than number, if true re assign leftIndex value with middleIndex + 1
    if (currentValue < num) {
      leftIndex = middleIndex + 1;
      // if false, do check if currentValue greater than number, if true re assign rightIndex value with middleIndex - 1
    } else if (currentValue > num) {
      rightIndex = middleIndex - 1;
      // if false, do else and in this state, number value found in array, return middleIndex
    } else {
      return middleIndex;
    }
  }
  // if number value not found in array, return -1
  return -1;
}

test("Run Binary Search Test", () => {
  assert.strictEqual(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      37
    ),
    9
  );
});
