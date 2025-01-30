import test from "node:test";
import assert from "node:assert";

function isPalindrome(str) {
  let arr = [];
  let idx = 0;
  let len = str.length;
  let result = false;

  function palindromeFunc(str, idx, len) {
    if (idx === len) return;

    let temp = str[idx];
    palindromeFunc(str, idx + 1, len);
    arr.push(temp);
  }

  palindromeFunc(str, idx, len);

  if (str === arr.join("")) {
    result = true;
  }

  return result;
}

test("Run Palindrome Test", async (t) => {
  await t.test("Should return true", () => {
    assert.strictEqual(isPalindrome("kasurrusak"), true);
  });

  await t.test("Should return false", () => {
    assert.strictEqual(isPalindrome("awesome"), false);
  });
});
