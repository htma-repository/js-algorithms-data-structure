function disemvowel(str) {
  const arrStr = str.toLowerCase();
  return str.replace(/[aeiou]/gi, "");
}

const disemvowel = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) === -1) {
      newStr += char;
    }
  }
  return newStr;
};

console.log(disemvowel("This website is for losers LOL!"));
