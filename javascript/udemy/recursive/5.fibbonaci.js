import test from "node:test";
import assert from "node:assert";

function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

/*
fib(10)
    fib(num - 1) + fib(num - 2) => 
        fib(9)                     fib(8)
fib(num-1) + fib(num-2)     fib(num-1) + fib(num-2)
  fib(8)                fib(7)                      fib(7)                  fib(6)
fib(num-1) + fib(num-2) fib(num-1) + fib(num-2) fib(num-1) + fib(num-2)   fib(num-1) + fib(num-2)
  fib(7)       fib(6)     fib(6)       fib(5)      fib(6)       fib(5)       fib(5)       fib(4)
*/

test("Run Product Of Array Test", () => {
  assert.strictEqual(fib(10), 55);
});
