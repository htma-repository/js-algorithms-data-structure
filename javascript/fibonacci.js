"use strict";
function fibonacci(n) {
    const num = [0, 1];
    for (let i = 0; n > num.length; i++) {
        const newNum = num[i] + num[i + 1];
        num.push(newNum);
    }
    return num;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
