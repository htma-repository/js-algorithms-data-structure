function getMiddle(s) {
  const newArr = s.split("");
  let middleStr = "";

  if (newArr.length % 2 == 0) {
    const strMiddle1 = newArr.slice(0, newArr.length / 2);
    const strMiddle2 = newArr.slice(newArr.length / 2, newArr.length);
    middleStr = `${strMiddle1[strMiddle1.length - 1]}${strMiddle2[0]}`;
  } else {
    const strMiddle = newArr.slice(newArr.length / 2, newArr.length);
    middleStr = `${strMiddle[0]}`;
  }

  return middleStr;
}

console.log(getMiddle("Hutama"));
console.log(getMiddle("testing"));
