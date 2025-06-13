const data = {
  a: 5,
  b: {
    c: 10,
    d: [2, { e: 3 }],
  },
  f: [1, 4],
};

function deepSum(obj) {
  let result = 0;
  function recuresiveSum(val) {
    if (typeof val === "number") {
      result += val;
    } else if (typeof val === "object") {
      for (let n in val) {
        recuresiveSum(val[n]);
      }
    } else if (Array.isArray(val)) {
      for (let n of val) {
        recuresiveSum(n);
      }
    }
    return result;
  }
  recuresiveSum(obj);
  return result;
}

console.log(deepSum(data));
