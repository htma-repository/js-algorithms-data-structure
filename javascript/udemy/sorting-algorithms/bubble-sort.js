import test from "node:test";
import assert from "node:assert";

// function swap(arr, idx1, idx2) {
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;

//   return arr;
// }

function bubbleSort(arr) {
  let result = [...arr];
  let noSwap;
  for (let i = result.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(result, result[j], result[j + 1]);
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        noSwap = false;
        // result = swap(arr, i, j);
      }
    }
    if (noSwap) break;
  }
  return result;
}

test("Bubble Sort Test", () => {
  assert.deepEqual(
    bubbleSort([7, 4, 6, 9, 1, 3, 2, 5, 8]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});
