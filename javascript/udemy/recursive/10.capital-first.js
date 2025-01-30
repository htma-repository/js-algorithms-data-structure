import test from "node:test";
import assert from "node:assert";

function capitalizeFirst(arr, result = []) {
  if (arr.length === 0) return;

  let temp = arr[0].charAt(0).toUpperCase() + arr[0].substring(1).toLowerCase();
  result.push(temp);
  capitalizeFirst(arr.slice(1), result);
  return result;
}

test("Run Capitalize First Test", () => {
  assert.deepEqual(capitalizeFirst(["car", "taco", "banana"]), [
    "Car",
    "Taco",
    "Banana",
  ]);
});
