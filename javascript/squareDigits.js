function squareDigits(num) {
  const numToStr = num.toString();
  let newNum = "";

  for (let i = 0; i < numToStr.length; i++) {
    newNum += numToStr[i] ** 2;
  }

  return +newNum;
}

console.log(squareDigits(3212));
