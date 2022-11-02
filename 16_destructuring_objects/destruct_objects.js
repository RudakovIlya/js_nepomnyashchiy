// Destructuring

const developer = {
  id: 1,
  fullName: 'John Doe',
  skills: ['HTML', 'CSS', 'JavaScript'],
  area: 'frontend',
  languages: {
    english: 'B2',
    spanish: 'native',
    hebrew: 'A1'
  }
};

let area,id;
({area,id} = developer);
console.log(area);
// const {
//   area: areaDeveloper = 'BackEnd',
//   id = null, // по умолчанию
//   languages: {
//     spanish: spanishNative,
//   },
//   skills : [firstSkill],
//   ...other  // объект.
// } = developer || {};
//
// console.log(id, areaDeveloper,other,spanishNative,firstSkill);
