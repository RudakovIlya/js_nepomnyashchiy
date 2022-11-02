// Destructuring

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

const numbers = [1, 2, [3, 4], 10, 12, 23];


const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];

const [madrid, paris, ...otherCities] = cities;
console.log(madrid, paris); // Madrid Paris
console.log(madrid, paris, otherCities); // Madrid Amsterdam [ 'Paris', 'Berlin', 'Kiev' ]

const [
  m = '',
  a = '228',
  ...other] = cities;
console.log(m);

const [A, b, c] = numbers;
console.log(c);

let x = 10;
let y = 20;
[y, x] = [x, y];
console.log(x);
