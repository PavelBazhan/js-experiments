<script setup>
const sum = (a) => {
  return (b) => {
    return a + b;
  }
};

console.log(sum(1)(2));
console.log(sum(5)(-1));

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => {
  const operA = a;
  const operB = b;
  return (elem) => elem >= operA && elem <= operB;
};
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

const inArray = (arr) => {
  if (!Array.isArray(arr)) return (e) => true;
  const outerArray = arr;
  return (elem) => outerArray.includes(elem);
};
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
console.log(arr.filter(inArray('string'))); // 1,2

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

const byField = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1;
};

users.sort(byField('name'));
users.forEach((e) => console.log(e));
users.sort(byField('age'));
users.forEach((e) => console.log(e));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    const j = i;
    let shooter = function() { // функция shooter
      console.log( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.
</script>

<template>
  <h4>ClosuresView</h4>
</template>