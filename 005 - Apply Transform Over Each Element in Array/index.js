/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Task: Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};
