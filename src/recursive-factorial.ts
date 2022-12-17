function recursiveFactorial(n: number): number {
  // if (n === 0) return 1;
  // return n * recursiveFactorial(n - 1);
  return n === 0 ? 1 : n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(10));

// Big-0 = 0(n)
