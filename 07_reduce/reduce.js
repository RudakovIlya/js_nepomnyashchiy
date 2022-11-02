// Reduce

const staff = [
  {
    id: 1,
    name: 'John Doe',
    salary: 1000
  },
  {
    id: 2,
    name: 'Sara Smith',
    salary: 900
  },
  {
    id: 3,
    name: 'Elton John',
    salary: 1100
  },
  {
    id: 4,
    name: 'Mo Williams',
    salary: 1000
  }
];

const budget = staff.reduce((accum,item) => accum += item.salary,0);
console.log(budget);

const budgetForSmallPersonal = staff.reduce((accum,item) => {
  if(item.salary < 1000) {
    return accum + item.salary;
  }else{
    return accum;
  }
},0);

console.log(budgetForSmallPersonal);

const salaries = staff.reduce((accum,user) => {
  return [...accum,user.salary];
},[])

console.log(salaries);
