function eligibility(name, age) {
  if (age >= 18) {
    return `${name} are eligible to drink.`;
  } else {
    return `${name} can't drink alcohol.`;
  }
}

const array = [
  {
    name: "orgho",
    age: 22,
  },
  {
    name: "alak",
    age: 36,
  },
  {
    name: "Arnab",
    age: 28,
  },
  {
    name: "shama",
    age: 19,
  },
  {
    name: "Orito",
    age: 16,
  },
  {
    name: "Raj",
    age: 17,
  },
  {
    name: "Morphie",
    age: 30,
  },
  {
    name: "Adam",
    age: 25,
  },
  {
    name: "Jeason",
    age: 29,
  },
  {
    name: "Vlad",
    age: 27,
  },
];

let result = "";

for (let index = 0; index < array.length; index++) {
  result += eligibility(array[index].name, array[index].age) + "\n";
}

console.log(result);
