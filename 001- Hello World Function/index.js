// Task: Write a function createHelloWorld.
// It should return a new function that always returns "Hello World".

let createHelloWorld = () => {
  return () => {
    return "Hello World";
  };
};

const f = createHelloWorld();
f(); // "Hello World"
