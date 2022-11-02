// Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const users = [
  {
    id: 1,
    name: 'Brad Pette',
    isMarried: false
  },
  {
    id: 2,
    name: 'Diana Morre',
    isMarried: true
  },
  {
    id: 3,
    name: 'Olivie Giraud',
    isMarried: true
  },
  {
    id: 4,
    name: 'Scott Parker',
    isMarried: true
  }
];

const oddNumbers = numbers.filter(item => item % 2 !== 0);
console.log(oddNumbers);

const func = (el) => el % 2 !== 0;
const secondOddNumbers = numbers.filter(func);
console.log(secondOddNumbers);

const isMarried = users.filter(item => item.isMarried);
console.log(isMarried);

const notMarried = users.filter(item => !item.isMarried);
console.log(notMarried);

const mapUsers = users.map(item => `id: ${item.id}, name: ${item.name}, isMarried: ${item.isMarried}`);
console.log(mapUsers);
