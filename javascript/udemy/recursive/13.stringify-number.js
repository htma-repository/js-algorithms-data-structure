import test from "node:test";
import assert from "node:assert";

function stringifyNumbers(obj) {
  let result = { ...obj };

  function stringifyNumbersFunc(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        const element = obj[key];
        stringifyNumbersFunc(element);
      } else if (typeof obj[key] === "number") {
        obj[key] = obj[key].toString();
      }
    }
  }

  stringifyNumbersFunc(result);

  return result;
}

test("Run Stringify Numbers Test", () => {
  let obj = {
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  };

  assert.deepEqual(stringifyNumbers(obj), {
    num: "1",
    test: [],
    data: {
      val: "4",
      info: {
        isRight: true,
        random: "66",
      },
    },
  });
});
