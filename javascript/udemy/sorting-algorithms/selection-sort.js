import test from "node:test";
import assert from "node:assert";

function selectionSort(arr) {
  // loop all the array with for loop
  for (let i = 0; i < arr.length; i++) {
    // save the smallest value index to variable smallestIdx
    let smallestIdx = i;
    // loop the value but start with i + 1, because we want compare the smallest index value with next the index value of array
    for (let j = i + 1; j < arr.length; j++) {
      // checking if array value of j less than array value of smallestIdx
      if (arr[j] < arr[smallestIdx]) {
        // if true, change the smallestIdx value to index j
        smallestIdx = j;
      }

      // this loop will run to last array value until find smallestIdx value
    }

    // checking if i not equal with smallestIdx
    if (i !== smallestIdx) {
      // if true, and after find the smallestIdx value, swap the arr smallest value to the value i
      let temp = arr[i];
      arr[i] = arr[smallestIdx];
      arr[smallestIdx] = temp;
    }
  }

  return arr;
}

test("Selection Sort Test", () => {
  assert.deepEqual(
    selectionSort([7, 4, 6, 9, 1, 3, 2, 5, 8]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});
