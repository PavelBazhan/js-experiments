<script setup>
function makeCounter() {

function counter() {
  return ++counter.count;
};

counter.count = 0;

counter.set = function(value) {
  counter.count = value;
  return counter.count;
};

counter.decrease = () => {
  counter.count -= 1;
  return counter.count;
};

return counter;
}

let counter = makeCounter();

counter.count = 10;

console.log(counter()); // 10
console.log(counter()); // 10
console.log(counter()); // 10
console.log(counter.set(5));
console.log(counter()); // 10
console.log(counter.decrease());

const sum = function localSum(a) {
  console.log('a: ', a);
  let currentSum = 0;
  
  if (a) {
    currentSum += a;
    return localSum;
  }
};

console.log('sum BELOW');
console.log(sum(1)(2)); // 1 + 2
// console.log(sum(1)(2)(3)); // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
</script>

<template>
  <h4>FunctionObjectView</h4>
</template>