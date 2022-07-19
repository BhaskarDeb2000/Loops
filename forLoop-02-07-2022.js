// const arr = [0, 2, 3];
// console.log(arr[1]);
// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// console.log("\n Task 8= Remove a specific array element with 2 arguments");
// function specificElementRemover(a, b) {
//   return a.filter((e) => {
//     return e !== b;
//   });
// }
// console.log(specificElementRemover([1, 2, "2"], "2"));
// function nameCharcter(a) {
//   if (a.length > 5) {
//     return "Hello";
//   } else {
//     return "I don't know you";
//   }
// }
// // what about else :D
// console.log(nameCharcter("Bhas"));
// good good

// bring the array task is

// function longestStringFinder(a) {}
// console.log(longestStringFinder(["I", "need", "candy"]));
// //can you plz
let b = ["I", "need", "she", "candy"];
let longestStringFinder = "";

function myFunction(b) {
  for (let index = 0; index < b.length; index++) {
    b[index].length > longestStringFinder.length
      ? (longestStringFinder = b[index])
      : null;
  }
  return longestStringFinder;
}
myFunction(b);
