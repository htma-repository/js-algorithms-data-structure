const recursiveFibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(8));