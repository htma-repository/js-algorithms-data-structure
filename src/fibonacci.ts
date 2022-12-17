function fibonacci(n: number): number[] {
  const num = [0, 1]; // 1
  // for (let i = 0; n > num.length; i++) {
  //   const newNum = num[i] + num[i + 1];
  //   num.push(newNum);
  // } //

  for (let i = 2; i < n; i++) {
    num[i] = num[i - 1] + num[i - 2];
  }

  return num; // 1
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// n (if n = 4, n = 4) 4 + 2 = Big-O - O(n)

/* 

1. function fibonacci berparameter n = 5, didalam function terdapat variable num = [0, 1]
2. buat for loop dengan i = 2, i < n, i++
3. jika n = 5 maka, looping pertama akan menghitung num[i] = num[i - 1] + num[i - 2]
  yang artinya num[i] dimana untuk loopingan pertama num[2] = num[2 - 1] + num[2 - 2] === num[2] = 1 + 0 = 1,  yang menambahkan value di variable num menjadi [0, 1, 1],
  lalu loopingan ke-2 menjadi num[3] = num[3-1] + num[3-2] yang menambahkan value variable num menjadi [0, 1, 1, 2], looping akan terus berjalan sampai nilai i lebih besar dari n baru berhenti & mereturn num

*/
