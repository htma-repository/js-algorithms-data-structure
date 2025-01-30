//Frequency Counter Pattern

import test from "node:test";
import assert from "node:assert";

function validAnagram(str1, str2) {
  const arrStr1 = {};
  // const arrStr2 = {};
  let result = true;

  // if str1.length didn't same with str2.length return false
  if (str1.length !== str2.length) {
    result = false;
    return result;
  }

  /*

  { 
    k:1,
    a:1,
    s:1,
    u:1,
    r:1,
  }

  { 
    r:1,
    u:1,
    s:1,
    a:1,
    k:1,
  }

  */

  for (const char of str1) {
    // if arrStr1[char] value already exist used it & + 1, otherwise add 0 & + 1
    arrStr1[char] = (arrStr1[char] || 0) + 1;
  }

  // for (const char of str2) {
  //   // if arrStr1[char] value already exist used it & + 1, otherwise add 0 & + 1
  //   arrStr2[char] = (arrStr2[char] || 0) + 1;
  // }

  // for (const elem in arrStr1) {
  //   // if arrStr1[elem] didn't same with arrStr2[elem] return false & break the loop
  //   if (arrStr1[elem] !== arrStr2[elem]) {
  //     result = false;
  //     break;
  //   }
  //   arrStr1[elem] -= 1;
  // }

  for (const val of str2) {
    if (!arrStr1[val]) {
      result = false;
      return result;
    } else {
      arrStr1[val] -= 1;
    }
  }

  return result;
}

test("Valid Anagram Test", async (t) => {
  await t.test("Must return true", () => {
    assert.strictEqual(validAnagram(" ", " "), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(validAnagram("aaz", "zza"), false);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(validAnagram("anagram", "nagaram"), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(validAnagram("rat", "car"), false);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(validAnagram("awesome", "awesom"), false);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(validAnagram("qwerty", "qeywrt"), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(validAnagram("texttwisttime", "timetwisttext"), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(validAnagram("kasur", "rusak"), true);
  });
});

function same(arr1, arr2) {
  const arr1Obj = {};
  const arr2Obj = {};
  let result = true;

  // check if arr1.length !== arr2.length return false
  if (arr1.length !== arr2.length) {
    result = false;
    return result;
  }

  // loop arr1 & check if arr1Obj already have squaredVal obj-props, +1, otherwise = 1
  for (let val of arr1) {
    // squared all arr1 value
    const squaredVal = val ** 2;

    // check if arr1Obj[squaredVal] already exist, value + 1, otherwise value = 1
    if (arr1Obj[squaredVal]) arr1Obj[squaredVal] += 1;
    else arr1Obj[squaredVal] = 1;
  }

  for (let val of arr2) {
    // check if arr2Obj[val] already exist, value + 1, otherwise value = 1
    if (arr2Obj[val]) arr2Obj[val] += 1;
    else arr2Obj[val] = 1;
  }

  /*
    [1, 2, 3] squared
    {
    1:1,
    4:1,
    9:1
  }
  [4, 1, 9]
    {
    4:1,
    1:1,
    9:1,
  }
  */

  for (let val in arr1Obj) {
    // check if arr1Obj[val] didn't same with arr2Obj[val] return false & break the loop
    if (arr1Obj[val] !== arr2Obj[val]) {
      result = false;
      break;
    }
    // otherwise arr1Obj[val] -1
    arr1Obj[val] -= 1;
  }

  return result;
}

test("Squared Same Test", async (t) => {
  await t.test("Must return true", () => {
    assert.strictEqual(same([1, 2, 3], [4, 1, 9]), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(same([1, 2, 3], [1, 9]), false);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(same([2, 4, 5], [16, 4, 25]), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(same([1, 2, 1], [4, 4, 1]), false);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(same([1, 2, 3, 4], [4, 1, 9, 25]), false);
  });
});

function sameFrequency(num1, num2) {
  const num1Str = String(num1);
  const num2Str = String(num2);
  const num1Obj = {};
  const num2Obj = {};
  let result = true;

  if (num1Str.length !== num2Str.length) return false;

  for (const val of num1Str) {
    if (num1Obj[val]) {
      num1Obj[val] += 1;
    } else {
      num1Obj[val] = 1;
    }
  }

  for (const val of num2Str) {
    if (num2Obj[val]) {
      num2Obj[val] += 1;
    } else {
      num2Obj[val] = 1;
    }
  }

  for (const val in num1Obj) {
    if (num1Obj[val] !== num2Obj[val]) {
      result = false;
      break;
    }
    num1Obj[val] -= 1;
  }

  return result;
}

test("Same Frequency Test", async (t) => {
  await t.test("Must return true", () => {
    assert.strictEqual(sameFrequency(182, 281), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(sameFrequency(34, 14), false);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(sameFrequency(3589578, 5879385), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(sameFrequency(22, 222), false);
  });
});
