import { test } from "bun:test";
import assert from "node:assert";

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, middle));
  let arr2 = mergeSort(arr.slice(middle));

  return merge(arr1, arr2);
}

test("Merge Sort Test", () => {
  assert.deepEqual(
    mergeSort([7, 4, 6, 9, 1, 3, 2, 5, 8]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});
