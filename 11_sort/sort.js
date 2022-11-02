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
developers.sort((a,b) => sorting(a.area,b.area));
console.log(developers);

const numbers = [1,2,3,4,5,6,10,12,23,44];
numbers.sort();
console.log(numbers);
numbers.sort((a,b) => a - b);
console.log(numbers);
console.log(numbers.reverse());

const cities = ['Madrid','Amsterdam','Paris','Berlin','Kiev'];
cities.sort(sorting);
console.log(cities);
function  sorting(a,b) {
  if(a > b) return 1;
  if(a < b) return -1;
  return  0;
}
