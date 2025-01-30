import test from "node:test";
import assert from "node:assert";

function collectStrings(obj) {
  let result = [];

  function collectStringsFunc(obj, result) {
    for (const key in obj) {
      const element = obj[key];
      if (typeof element === "object") {
        collectStringsFunc(element, result);
      } else if (typeof element === "string") {
        result.push(element);
      }
    }
  }

  collectStringsFunc(obj, result);

  return result;
}

test("Run Collect String Test", () => {
  const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  };
  assert.deepEqual(collectStrings(obj), ["foo", "bar", "baz"]);
});
