// function nextChar(c) {
//   return String.fromCharCode(c.charCodeAt(0) + 1);
// }

// function myfunction(str) {
//   const people = str.split("");
//   let result = "";
//   for (let index = 0; index < people.length; index++) {
//     result = +nextChar(people[index]);
//   }
//   console.log(result);
// }
// myFunction("bnchmf");

// argument string

// function ageMultiplier(a) {
//   return a * 2;
// }
// function emailConfirm(b) {
//   if (b.email == "orghodeb@gmail.com") {
//     return `Hello ${b.name}`;
//   } else {
//     return "Who are you again?";
//   }
// }
// function ageEligibility(c) {
//   if (c.age >= 25) {
//     return `${c.name} is Eligible to Drink`;
//   } else {
//     return `${c.name} isn't eligible to drink`;
//   }
// }

// const people = [
//   {
//     name: "Orgho",
//     age: 22,
//     email: "orghodeb@gmail.com",
//     userName: "org",
//   },
//   {
//     name: "alak",
//     age: 19,
//     email: "alak@gmail.com",
//     userName: "al",
//   },
//   {
//     name: "shama",
//     age: 22,
//     email: "shama@gmail.com",
//     userName: "sh",
//   },
//   {
//     name: "Arnob",
//     age: 28,
//     email: "arnob@gmail.com",
//     userName: "ar",
//   },
// ];

// for (let index = 0; index < people.length; index++) {
//   console.log(ageMultiplier(people[index].age));
//   console.log(emailConfirm(people[index]));
//   console.log(ageEligibility(people[index]));
// }

// task
// const array1 = [100, 20, 30, 5, 23];
// function remain(d) {
//   if ((d / 5) % 3) {
//     return "uwu";
//   } else {
//     return "nada";
//   }
// }
// for (let index = 0; index < array1.length; index++) {
//   console.log(remain(array1[index]));
// }

// function passwordValidation(i) {
//   if (i.password === "password2") {
//     return `Welcome ${i.username}`;
//   } else {
//     return "You aren't welcome";
//   }
// }
// const array2 = [
//   { username: "orgho", password: "password" },
//   { username: "orgho1", password: "password2" },
// ];
// for (let index = 0; index < array2.length; index++) {
//   console.log(passwordValidation(array2[index]));
// }

// function descrip(o) {
//   if (o.description.toLowerCase() === "hello world") {
//     return `Hello My friend ${o.name}`;
//   } else {
//     return "Who are you?";
//   }
// }
// const arrays = [
//   { name: "Orgho", description: "How you doin?" },
//   { name: "Shyama", description: "Hello World" },
// ];
// for (let index = 0; index < arrays.length; index++) {
//   console.log(descrip(arrays[index]));
// }

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

function mail(n) {
  if (n.email.toLowerCase() === "alak@dam.com") {
    return `Welcome ${n.name}`;
  } else {
    return "Who are you?";
  }
}

function ageValidity(m) {
  if (m.age <= 19) {
    return "Wow! Cool!";
  } else {
    return "You're Old bro";
  }
}

function initial(v) {
  for (let index = 0; index < array.length; index++) {
    let newStr = "";
    if (people[index].userName.match(/[A-Z]/)) {
      newStr = +people[index].userName;
    }
  }
}

for (let index = 0; index < people.length; index++) {
  console.log(mail(people[index]));
  console.log(ageValidity(people[index]));
  console.log(initial(people[index]));
}
