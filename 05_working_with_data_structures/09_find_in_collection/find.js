// Find in collection

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

const findAnything = developers.find(item => item.area === 'frontend');
console.log(findAnything); // Весь объект!

const reactDev = developers.find(item => item.skills.includes('React'));
console.log(reactDev);

