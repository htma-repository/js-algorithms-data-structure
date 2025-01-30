import test from "node:test";
import assert from "node:assert";

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

/*
power(2,4)
      2 * power(2, 4 - 1) => 16
            2 * power(2 * 3 - 1) => 8
                  2 * power(2, 2 - 1) => 4
                        2 * power(2, 1 - 1) => 2
                              if num2 === 0 return 1 => 1      

*/

test("Run Power Test", () => {
  assert.deepEqual(power(2, 4), 16);
});
