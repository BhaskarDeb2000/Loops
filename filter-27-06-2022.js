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

// const newArry = array.filter((p) => {
//   return p.Password.length <= 3;
// });

// console.log(newArry);

// const number = ["one", "two", "three"];
// const number2 = number.filter((i) => {
//   return i == "two";
// });

// const bigggestNumber = [
//   -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
// ];

// const bigNumberArray = bigggestNumber.filter((j) => {
//   // task: 1
//   return j > 12;
// });
// console.log(bigNumberArray);

const animals = ["pigs", "goats", "sheep"];
const piglessArray = animals.filter((i) => {
  return i !== "pigs";
});
console.log(piglessArray);
