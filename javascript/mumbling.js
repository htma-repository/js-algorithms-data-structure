function accum(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      newStr += str[i].toLowerCase();
    }
    if (i < str.length - 1) {
      newStr += "-";
    }
  }
  return newStr;
}

console.log(accum("abcd"));
