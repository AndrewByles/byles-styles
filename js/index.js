import test from './test';

const one = 1;
const two = 2;
const arr = [1,2,3,4,5];

const add = (a, b) => {
  return a + b;
};

const doubleValues = (arr) => {
  return arr.map(v => v * 2);
};

console.log(add(one, two), doubleValues(arr));

test();