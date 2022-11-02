// Immutable

const arr = [1,2,3,4,5,56];

// don't use pop, push, shift, unshift, reverse.

const newArr = arr.slice(0,4); // [1,2,3,4]

const newArr2 = [0,...arr]; // spread оператор -> [0,1,2,3,4,5,56]

console.log(newArr);
console.log(newArr2);

const obj = {
  a: 1,
  b:2,
  c:3,
}
// obj.d = 4; // mutation
// obj.a = 10; // mutation

const obj2 = {
  ...obj,
  a: 10,
  d:4
}; // на выходе получаем {a:10, b:2, c:3, d:4};

console.log(obj);
console.log(obj2);
