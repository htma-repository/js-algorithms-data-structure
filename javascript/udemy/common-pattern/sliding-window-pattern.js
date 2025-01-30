//Sliding Window Pattern

import test from "node:test";
import assert from "node:assert";

function maxSubarraySum(arr, maxWin) {
  // O(n^2) time complexity
  // let maxSum = -Infinity;

  // if (maxWin > arr.length) {
  //   return null;
  // }

  // for (let i = 0; i < arr.length - maxWin + 1; i++) {
  //   let currentSum = 0;
  //   for (let j = 0; j < maxWin; j++) {
  //     console.log(arr[i + j]);
  //     currentSum += arr[i + j];
  //   }

  //   maxSum = Math.max(currentSum, maxSum);
  // }

  //O(n) time complexity
  let maxSum = 0;
  let tempSum = 0;

  // check if max window number greater than arr length
  if (maxWin > arr.length) return null;

  for (let i = 0; i < maxWin; i++) {
    // sum arr value that only based max window number & save to tempSum
    tempSum += arr[i];
  }

  //assign temSum to maxSum variable
  maxSum = tempSum;

  for (let j = maxWin; j < arr.length; j++) {
    // subtract current tempSum by arr[j-maxWin] & add arr[j] & assign to tempSum variable
    tempSum = tempSum - arr[j - maxWin] + arr[j];
    // compare maxSum & tempSum with Math.max where value is greater & assign to maxSum variable
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

test("Max SubArray Sum Test", async (t) => {
  await t.test("must return 10", () => {
    //                                         i
    assert.strictEqual(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
    //                                            j
  });

  await t.test("must return 50", () => {
    assert.strictEqual(
      maxSubarraySum(
        [1, 2, 5, 2, 8, 1, 5, 10, 3, 4, 15, 15, 10, 10, 2, 3, 14],
        4
      ),
      50
    );
  });
});

// UNFINISHED
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

test("Min Sub Array Len Test", async (t) => {
  await t.test("must return 2", () => {
    assert.strictEqual(minSubArrayLen([2, 3, 1, 2, 4, 3], 7), 2); // 2 -> because [4,3] is the smallest subarray
  });

  await t.test("must return 2", () => {
    assert.strictEqual(minSubArrayLen([2, 1, 6, 5, 4], 9), 2); // 2 -> because [5,4] is the smallest subarray
  });

  await t.test("must return 1", () => {
    assert.strictEqual(
      minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52),
      1
    ); // 1 -> because [62] is greater than 52
  });

  await t.test("must return 3", () => {
    assert.strictEqual(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), 3); // 3
  });

  await t.test("must return 5", () => {
    assert.strictEqual(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 5); // 5
  });

  await t.test("must return 2", () => {
    assert.strictEqual(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), 2); // 2
  });
  await t.test("must return 0", () => {
    assert.strictEqual(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), 0); // 0
  });
});

// UNFINISHED
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
