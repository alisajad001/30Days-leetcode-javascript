// Task: Given an array of functions [f1, f2, f3, ..., fn]
// return a new function fn that is the function composition of the array of functions.

/**
 * @param {Function[]} functions
 * @return {Function}
 */

let compose = (functions) => {
  return (n) => {
    return functions.reduceRight((acc, fn) => fn(acc), n);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
