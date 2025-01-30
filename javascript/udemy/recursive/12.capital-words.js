import test from "node:test";
import assert from "node:assert";

// function capitalizeWords(arr) {
//   let result = [];

//   function capitalizeWordsFunc(arr, result) {
//     if (arr.length === 0) return;

//     let temp = arr[0].toUpperCase();
//     result.push(temp);
//     capitalizeWordsFunc(arr.slice(1), result);

//     return result;
//   }

//   capitalizeWordsFunc(arr, result);

//   return result;
// }

function capitalizeWords(arr, result = []) {
  if (arr.length === 0) return;

  let temp = arr[0].toUpperCase();
  result.push(temp);
  capitalizeWords(arr.slice(1), result);

  return result;
}

test("Run Capitalize Words Test", () => {
  assert.deepEqual(capitalizeWords(["i", "am", "learning", "recursion"]), [
    "I",
    "AM",
    "LEARNING",
    "RECURSION",
  ]);
});
