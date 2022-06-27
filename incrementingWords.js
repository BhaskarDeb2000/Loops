const people = [
  { name: "alak", email: "alak@dam.com", age: 36, userName: "skyLover" }, //SL
  {
    name: "shame",
    email: "shame@dam.com",
    age: 19,
    userName: "shamsLikeJohnDoe", //SLJD
  },
  { name: "orgho", email: "orghodeb@dam.com", age: 22, userName: "heIsBusy" }, //HIB
];

// IF YOU MAIL IS alak@dam.com, say hi alak
// if your age is 19, wow :tada:
// make userName it takes first letter and next all big letters as USERNAME

function mail(n, m) {
  if (n.toLowerCase() === "alak@dam.com") {
    return `Welcome ${m}`;
  } else {
    return "Who are you?";
  }
}

function ageValidity(m, z) {
  if (m <= 19) {
    return `Wow! Cool! ${z}`;
  } else {
    return "You're Old bro";
  }
}

function firstLetterIsCapital(c) {
  return c.charAt(0).toUpperCase();
}

function findCapitalLetter(c) {
  let newStr = "";

  for (let i = 0; i < c.length; i++) {
    if (c[i].match(/[A-Z]/)) {
      newStr += c[i];
    }
  }
  return newStr;
}

function initial(v) {
  return `${firstLetterIsCapital(v)}${findCapitalLetter(v)}`;
}
function lastLetterCapital(f, u) {
  return f.slice(-1).toUpperCase() + "\n" + u;
}

for (let index = 0; index < people.length; index++) {
  console.log(mail(people[index].email, people[index].name));
  console.log(ageValidity(people[index].age, people[index].name));
  console.log(initial(people[index].userName));
  console.log(lastLetterCapital(people[index].name, people[index].userName));
}
