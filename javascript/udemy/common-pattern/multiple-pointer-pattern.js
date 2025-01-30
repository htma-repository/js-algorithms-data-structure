// Multiple Pointer Pattern

import assert from "node:assert";
import test from "node:test";

function countUniqueValues(arr) {
  let pointer1 = 0;
  let pointer2 = 1;

  if (arr.length === 0) return 0;

  for (let j = pointer2; j < arr.length; j++) {
    if (arr[pointer1] !== arr[j]) {
      pointer1++;
      arr[pointer1] = arr[j];
    }
  }

  return pointer1 + 1;
}

function sumZero(arr) {
  // O(n^2)
  // const result = [];
  // for (const num of arr) {
  //   for (const num2 of arr) {
  //     if (num + num2 === 0) {
  //       result.push(num, num2);
  //       break;
  //     }
  //   }
  //   break;
  // }
  // return result.length > 0 ? result : undefined;

  // O(n)
  let left = 0;
  let right = arr.length - 1;

  // only execute if index left smaller than right
  while (left < right) {
    // sum value arr[left] & arr[right]
    const sum = arr[left] + arr[right];

    // if sum value = 0 return array of left & right value
    if (sum === 0) {
      return [arr[left], arr[right]];
      // if sum value more than 0, right -1
    } else if (sum > 0) {
      right--;
      // otherwise left + 1
    } else {
      left++;
    }
  }
}

test("Sum Zero Test", async (t) => {
  await t.test("result must [-3, 3]", () => {
    assert.deepEqual(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
  });

  await t.test("result must undefined", () => {
    assert.deepEqual(sumZero([-2, 0, 1, 3]), undefined);
  });

  await t.test("result must [-10, 10]", () => {
    assert.deepEqual(
      sumZero([-10, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [-10, 10]
    );
  });

  await t.test("result must undefined", () => {
    assert.deepEqual(sumZero([1, 2, 3]), undefined);
  });

  await t.test("result must [-2, 2]", () => {
    assert.deepEqual(sumZero([-3, -2, -1, 0, 2, 4, 8]), [-2, 2]);
  });
});

function areThereDuplicates(...arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
  let left = 0;
  let right = 1;

  while (left < arr.length) {
    if (arr[left] === arr[right]) {
      return true;
    }
    right++;
    left++;
  }

  return false;
}

test("Are There Duplicates Test", async (t) => {
  await t.test("Must return false", () => {
    assert.strictEqual(areThereDuplicates(1, 2, 3), false);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(areThereDuplicates(1, 2, 2), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(areThereDuplicates("a", "b", "c", "a"), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(areThereDuplicates(1, 2, 1, 3), true);
  });
});

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 0) return false;

  while (left < right) {
    let sumAvg = (arr[left] + arr[right]) / 2;

    if (sumAvg === avg) {
      return true;
    } else if (sumAvg > avg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

test("Average Pair Test", async (t) => {
  await t.test("Must return true", () => {
    assert.strictEqual(averagePair([1, 2, 3], 2.5), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(averagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(averagePair([], 4), false);
  });
});

function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;

  if (!str1) {
    return true;
  }

  while (right < str2.length) {
    if (str1[left] === str2[right]) {
      left++;
    }
    if (left === str1.length) {
      return true;
    }
    right++;
  }

  return false;
}

test("Is Subsequence Test", async (t) => {
  await t.test("Must return true", () => {
    assert.strictEqual(isSubsequence("hello", "hello world"), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(isSubsequence("sing", "sting"), true);
  });

  await t.test("Must return true", () => {
    assert.strictEqual(isSubsequence("abc", "abracadabra"), true);
  });

  await t.test("Must return false", () => {
    assert.strictEqual(isSubsequence("abc", "acb"), false);
  });
});
