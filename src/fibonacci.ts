function fibonacci(n: number): number[] {
  const num = [0, 1]; // 1
  for (let i = 0; n > num.length; i++) {
    const newNum = num[i] + num[i + 1];
    num.push(newNum);
  } // n (if n = 4, n = 4) 4 + 2 = Big-O - O(n)

  /* 
    - num with initial array of number [0, 1];
    - for loop i = 0, n greater than num length, i value + 1 looping until meet the condition;
    - newNum variable, sum num[i] + num[i + 1];
    - value of newNum variable push to num array variable
  */

  // for (let i = 2; i < n; i++) {
  //   num[i] = num[i - 1] + num[i - 2];
  // }

  return num; // 1
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
