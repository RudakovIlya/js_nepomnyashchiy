// Spread/rest operator

const developers = [
  {
    id: 1,
    fullName: 'John Doe',
    skills: ['HTML', 'CSS', 'JavaScript'],
    area: 'frontend'
  },
  {
    id: 2,
    fullName: 'Adam Smith',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    area: 'frontend'
  },
  {
    id: 3,
    fullName: 'Will Dawson',
    skills: ['HTML', 'PHP', 'Laravel'],
    area: 'backend'
  },
  {
    id: 4,
    fullName: 'Sam Wilson',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP']
  }
];


const numbers = [1, 2, 3, 4, 10, 12, 23];
console.log(numbers);

const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];
console.log(...cities);

const arr2 = ['Riga', ...cities, 'Moscow'];
console.log(arr2);

const dev1 = {
  id: 1,
  fullName: 'John Doe',
  skills: ['HTML', 'CSS', 'JavaScript'],
  area: 'frontend'
};

const dev2 = { ...dev1, ...developers[2]  };
console.log(dev2);

function sum(a,b,...args) {
  let result = a + b;
  return result + args.reduce((accum,item) => accum + item);
}

console.log(sum(1,2,3,4,5,6));
