const food = ['Apple', 'Melon', 'Banana', 'Yogurt', 'Orange', 'Strawberry'];

const players = [
  {
    id: 1,
    name: 'Cristiano',
    surname: 'Ronaldo',
    club: 'Juventus'
  },
  {
    id: 2,
    name: 'Lionel',
    surname: 'Messi',
    club: 'Barcelona'
  },
  {
    id: 3,
    name: 'Karim',
    surname: 'Benzema',
    club: 'Real Madrid'
  },
  {
    id: 4,
    name: 'Maxi',
    surname: 'Gomez',
    club: 'Valencia'
  },
  {
    id: 5,
    name: 'Quincy',
    surname: 'Promes',
    club: 'Spartak'
  }
];

const sorting = (a,b) => a > b ? 1 : a < b  ? -1 : 0;

food.sort(sorting);
console.log(food);

players.sort((a,b) => sorting(a.surname,b.surname));
console.log(players);
