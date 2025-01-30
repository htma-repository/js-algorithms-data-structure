// O(1) time complexity
// O(1) space complexity
function sum(num) {
  let result = 0;
  for (let i = 0; i < Math.min(num, 50000); i++) {
    result += i;
  }
  return result;
}

console.log(sum(200000));

// O(n) time complexity
// O(1) space complexity
function sumAll(num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll(200000));

// O(N^2) time complexity

function sumMulArr(arrMul) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arrMul.length; i++) {
    for (let j = 0; j < arrMul[i].length; j++) {
      sum += arrMul[i][j];
    }
    result.push(sum);
    sum = 0;
  }

  // for (const element of arrMul) {
  //   for (const val of element) {
  //     sum += val;
  //   }
  //   result.push(sum);
  //   sum = 0;
  // }

  return result;
}

console.log(
  sumMulArr([
    [10, 20],
    [30, 40],
    [50, 50],
    [40, 30, 60],
  ])
); // [30, 70, 100, 130]

// Object
const employee = {
  name: "John Doe",
  address: "United Kingdom",
  isActive: true,
  job_list: ["Frontend", "Backend"],
};

console.log(Object.keys(employee)); // O(n)
console.log(Object.values(employee)); // O(n)
console.log(Object.entries(employee)); // O(n)
console.log(Object.hasOwn(employee, "name")); // O(1)
console.log(employee.hasOwnProperty("name")); // O(1)
console.log(employee.name); // O(1)

// Array

const names = ["John", "Doe", "Bryan", "Harry"];

names.push("Tom"); // O(1)
names.pop(); // O(1)
names.unshift("Gerry"); // O(n)
names.shift(); // O(n)

const newNames = ["Thomas", "Alex", "Robert", "Bill"];

const newConcat = names.concat(newNames); // O(n)

const newSlice = newNames.slice(1, 3); // O(n)

const newSplice = newNames.splice(1, 1); // O(n)

const numList = [10, 30, 25, 5000];

const newSort = numList.sort((a, b) => a - b); // O(n * log n)

const addHello = names.map((name) => {
  return `Hello, ${name}`;
}); // O(n)

console.log(names);
console.log(newConcat);
console.log(newSlice);
console.log(newSplice);
console.log(newSort);
console.log(addHello);

// exercise

/**
 * Counts the occurrences of each character in a given string.
 *
 * @param {string} str - The string to count characters in.
 * @returns {Object} An object where the keys are characters and the values are the number of times each character appears in the string.
 */
function countStr(str) {
  const result = {};
  // {
  // h:1,
  // e:1,
  // l:2, 1 + 1
  // o:1
  // }
  const strLower = str.toLowerCase();
  for (let i = 0; i < strLower.length; i++) {
    const char = strLower[i];
    if (result[char] > 0) {
      // console.log(char, result[char]);
      result[char]++;
    } else {
      console.log(char, result[char]);
      result[char] = 1;
    }
  }

  return result;
}

console.log(countStr("Hello"));
