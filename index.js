function characterLow(name) {
  return name.toLowerCase().charAt(1);
}
function characterUp(name) {
  return characterLow(name);
}
function eligibility(name, age) {
  if (age >= 18) {
    return `${characterUp(name)} are eligible to drink`;
  } else {
    return `${characterUp(name)} can't drink honey, here's a glass of milk`;
  }
}

// console.log(eligibility("alak", 20));

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

for (let index = 0; index < array.length; index++) {
  console.log(eligibility(array[index].name));
}
