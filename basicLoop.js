function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function myfunction(str) {
  const people = str.split("");
  let result = "";
  for (let index = 0; index < people.length; index++) {
    result = +nextChar(people[index]);
  }
  return result;
}

function ageMultiplier(a) {
  return a * 2;
}
function emailConfirm(b) {
  if (b.email == "orghodeb@gmail.com") {
    return `Hello ${b.name}`;
  } else {
    return "Who are you again?";
  }
}
function ageEligibility(c) {
  if (c.age >= 25) {
    return `${c.name} is Eligible to Drink`;
  } else {
    return `${c.name} isn't eligible to drink`;
  }
}

const people = [
  {
    name: "Orgho",
    age: 22,
    email: "orghodeb@gmail.com",
    userName: "org",
  },
  {
    name: "alak",
    age: 19,
    email: "alak@gmail.com",
    userName: "al",
  },
  {
    name: "shama",
    age: 22,
    email: "shama@gmail.com",
    userName: "sh",
  },
  {
    name: "Arnob",
    age: 28,
    email: "arnob@gmail.com",
    userName: "ar",
  },
];

for (let index = 0; index < people.length; index++) {
  console.log(ageMultiplier(people[index].age));
  console.log(emailConfirm(people[index]));
  console.log(ageEligibility(people[index]));
}
