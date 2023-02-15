function getCount(str) {
  const newStr = str.split("");
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (newStr[i] === vowel[j]) {
        count += 1;
      }
    }
  }

  return count;
}

console.log(getCount("abracadabra"));
