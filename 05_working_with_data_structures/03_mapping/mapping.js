// 03_mapping

// map, forEach

const numbers = [1,2,3,4,5,6,7,8];

const print = (el,i,arr) => console.log(`item:${el} index:${i} array:${arr}`);

numbers.forEach(print)

numbers.forEach((item) => {
  console.log(item);
});

{/*-----------------------------------------------------------*/}

const doubleNum = (el) => Math.pow(el,el);
const result = numbers.map(doubleNum);
console.log(result);
const results = numbers.map(item => item ** 2);
console.log(results);
