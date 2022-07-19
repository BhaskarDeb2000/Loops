// const array = [
//   {
//     name: "Bhaskar Deb",
//     email: "orghodeb@gmail.com",
//     confirmEmail: "orghodeb@gmail.com",
//     Password: "YouNooB",
//   },
//   {
//     name: "Dharitree Deb",
//     email: "shyama@gmail.com",
//     confirmEmail: "shyama@gmail.com",
//     Password: "Asdfg",
//   },
//   {
//     name: "Alak Dam",
//     email: "alak@gmail.com",
//     confirmEmail: "alak@gmail.com",
//     Password: "12345",
//   },
//   {
//     name: "Raj Dutta",
//     email: "raj@gmail.com",
//     confirmEmail: "raj@gmail.com",
//     Password: "raj",
//   },
// ];

// function initials(a) {
//   return (
//     a.charAt(0).toUpperCase() +
//     a.split(" ").slice(-1).join().charAt(0).toUpperCase() +
//     "\n"
//   );
// }
// // function firstLetterIsCapital(c) {
// //   return c.charAt(0).toUpperCase();
// // }

// function findCapitalLetter(c) {
//   let newStr = "";

//   for (let i = 0; i < c.length; i++) {
//     if (c[i].match(/[A-Z]/)) {
//       newStr += c[i];
//     }
//   }
//   return newStr;
// }

// function userName(v) {
//   return `${findCapitalLetter(v)}\n`;
// }
// let result = "";
// let UserName = "";
// array.forEach((person) => {
//   result += initials(person.name);
//   UserName += userName(person.name);
// });
// console.log(UserName);

// let arr = [4, 5, 6, 7, 8, 9, 10];
// temp = 0;

// arr.forEach((element) => {
//   console.log(temp, element);
//   if (temp < element) {
//     temp = element;
//   }
// });

// console.log(`The largest number in the array: ${temp}`);

let b = ["I", "need", "she", "candy"];
let longestStringFinder = "";

function myFunction(b) {
  b.forEach((e) => {
    e.length > longestStringFinder.length ? (longestStringFinder = e) : null;
  });
  return longestStringFinder;
}
console.log(myFunction(b));
