const fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange", "papaya"];

// Using Map
const newVariable = fruits.map((fruit, index) => {
  console.log(index + " : " + fruit);
  return fruit.toUpperCase();
});

console.log(newVariable);

// Using filter
const newVariable1 = fruits.filter((fruit) => {
  return (
    (fruit.toUpperCase().startsWith("P") || fruit.toUpperCase().startsWith("M")) && fruit.length > 4);
});

console.log(newVariable1);

// Challenge
const students = [
  {
    name: "Agney",
    age: 23,
  },
  {
    name: "Ayush",
    age: 24,
  },
  {
    name: "Anirudh",
    age: 24,
  },
  {
    name: "Harmin",
    age: 25,
  },
  {
    name: "Topi",
    age: 28,
  },
];

const byKnockOut = students
  .filter((student) => {
    return student.age <= 25 && student.age >= 22;
  })
  .filter((student) => {
    return student.age === 23;
  })
  .filter((student) => {
    return student.name.toLowerCase().startsWith("a");
  })
  .map((student) => {
    return student.name;
  });

console.log(byKnockOut);
