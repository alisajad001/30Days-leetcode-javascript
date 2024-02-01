// Task: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

let createCounter = function (init) {
  let currCount = init;
  return {
    increment() {
      currCount++;
      return currCount;
    },

    decrement() {
      currCount--;
      return currCount;
    },

    reset() {
      currCount = init;
      return currCount;
    },
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
