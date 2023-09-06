  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

 const ofAge = people.filter(person => person.age >= 21);
 console.log(ofAge);

const selectPaul = people.filter(person => person.name.startsWith('P'))[0];
const paul = people.filter(p => p.name === 'Paul');

console.log(selectPaul);
console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// const candidates = students.filter( student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills > 0;
// });

// console.log(candidates);

// const hasStrongSkills = students => {
//   let strongSkills = students.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// }

// const candidates = students.filter(hasStrongSkills);
// console.log(candidates);

const has5earsExp = skill => skill.yrsExperience >= 5

const hasStrongSkills = students =>  students.skills.filter(has5earsExp).length > 0;

const candidates = students.filter(hasStrongSkills);
console.log(candidates);
