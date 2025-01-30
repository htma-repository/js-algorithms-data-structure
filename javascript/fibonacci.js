"use strict";
function fibonacci(n) {
  const numbers = [0, 1];

  while (n > numbers.length) {
    const nextNumber =
      numbers[numbers.length - 1] + numbers[numbers.length - 2];
    numbers.push(nextNumber);
  }

  return numbers;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
