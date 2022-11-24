function factorial(n: number) {
  // let fac: number[] = [];
  // for (let i = n; i >= 1; i--) {
  //   fac.push(i);
  // }
  // const newFac = fac.reduce((prev, curr) => prev * curr);
  // return newFac;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

// Big-O = O(n)
