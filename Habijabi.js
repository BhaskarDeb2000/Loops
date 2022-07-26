// console.log("\nTask 14= Check if all array elements are equal with 1 argument");
// function equalFinder(a) {
//   return a.every((val, i, arr) => {
//     return val === arr[0];
//   });
// }
// console.log(equalFinder([true, "fals", true, true]));

// const persons = [
//   {
//     name: "Bhaskar Deb",
//     age: 22,
//   },
//   {
//     name: "Dharitree Deb",
//     age: 10,
//   },
//   {
//     name: "Alak Dam",
//     age: 30,
//   },
//   {
//     name: "Raj Dutta",
//     age: 9,
//   },
// ];

// function ageVerifier(a) {
//   if (a.age > 10) {
//     return `hey ${a.name}, Drink Coffee\n`;
//   } else {
//     return `Hey ${a.name}, Drink Milk\n`;
//   }
// }

// let name1 = "";

// for (let i = 0; i < persons.length; i++) {
//   name1 += ageVerifier(persons[i]);
// }
// console.log(name1);

// function objectSort(a, b) {
//   if (a.last_nom < b.last_nom) {
//     return -1;
//   }
//   if (a.last_nom > b.last_nom) {
//     return 1;
//   }
//   return 0;
// }
// console.log(
//   objectSort([
//     { a: 1, b: 2 },
//     { a: 5, b: 4 },
//   ])
// );

// function numberFinder(a, b) {
//   return b.split("").filter((e) => {
//     return e.trim() === a;
//   }).length;
// }
// console.log(
//   numberFinder("m", "how many times does the character occur in this sentence?")
// );

// function myFunction(a, b) {
//   return (
//     a.charAt(0).toUpperCase() +
//     a.slice(1).replace("%", "") +
//     b.replace("%", "").split("").reverse().join("")
//   );
//   // return b.split("").replace("%", "").reverse().join();
// }
// console.log(myFunction("c%ountry", "edis"));

// str.substring(0, index) + stringToAdd + str.substring(index, str.length);

// "123456" >
//   ["1", "2", "3"] >
//   ["3", "2", "1"].map((e) => e.substr(0, 3) + b).reverse();

// function arrayInsert(a, b) {
//   return (
//     a.split("").reverse().join("").substring(0, 3) +
//     b +
//     a.split("").reverse().join("").substring(3)
//   );
// }
// console.log(arrayInsert("1234567", "."));

// function arrayInsert(a, b) {
//   return a.split("").reverse().map((e)=> {
//     console.log (e)
//   })
// }
// console.log(arrayInsert("1234567", "."));

// function nextChar(a) {
//   return a
//     .split("")
//     .map((e) => {
//       return String.fromCharCode(e.charCodeAt(0) + 1);
//     })
//     .join("");
// }
// console.log(nextChar("bnchmf"));

// function prime(num) {
//   var prime = num != 1;
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// }

// function primeNumber(a) {
//   var prime = a != 1;
//   for (let i = 2; i != a; i++) {
//     if (a % i == 0) {
//       prime = false;
//     }
//     return (prime += "");
//   }
//   return a;
// }
// console.log(primeNumber(10));

// function biggerPrime(a) {
//   for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       return biggerPrime(a + 1);
//     }
//   }
//   return a;
// }

// console.log(biggerPrime(38));
// function myFunction(x, y) {
//   for (x = 0; x < y; x++) {
//     if (x % y == 0) {
//       return x;
//     } else if ((x + 1) % y == 0) {
//       return x + 1;
//     }
//   }
//   return x;
// }
// console.log(myFunction(23, 23));
// function faunction(a) {
//   const d = a.filter((e) => {
//     const c = e < 0;
//     return c;
//   });
//   return d.length;
// }
// console.log(faunction([0, 9, 1]));

// function arraySummation(a, b) {
//   const c = a.filter((e) => {
//     return e > b;
//   });
//   return eval(c.join("+"));
// }
// console.log(arraySummation([1, 2, 3, 4, 5, 6, 7], 2));
// function rangeFinder(min, max) {
//   if (min === max) {
//     return [max];
//   } else {
//     const c = rangeFinder(min, max - 1);
//     c.push(max);
//     return c;
//   }
// }
// console.log(rangeFinder(2, 10));

// function arrayInsert(a, n) {
//   return a.map((e, i) => {});
// }
// console.log(arrayInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// function arraySorter(arr) {
//   return arr.sort((x, y) => x.b - y.b);
// }

// console.log(
//   arraySorter([
//     { a: 1, b: 2 },
//     { a: 5, b: 4 },
//   ])
// ); //expected output: [{a:1,b:2},{a:5,b:4}]
// console.log(
//   arraySorter([
//     { a: 2, b: 10 },
//     { a: 5, b: 4 },
//   ])
// ); //Expected output: [{a:5,b:4},{a:2,b:10}]
// console.log(
//   arraySorter([
//     { a: 1, b: 7 },
//     { a: 2, b: 1 },
//   ])
// );

function arraySorter1(arr) {
  return arr.map((e) => {
    return e.charCodeAt(0);
  });
}
console.log(arraySorter1(["Alf", "Alice", "Ben"]));

// console.log("\nTask16= Merge two arrays with duplicate values");
// function duplicateObjectMerger(a, b) {
//   return a
//     .concat(b)
//     .filter((v, i, a) => a.indexOf(v) === i)
//     .sort(function (a, b) {
//       return a - b;
//     });
// }
// console.log(duplicateObjectMerger([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
// //Another Solution
// function myFunction(a, b) {
//   return [...new Set([...a, ...b])].sort((x, y) => x - y);
// }
// function nthElementFinder(a, n) {
//   return a.filter((e, i, a) => {
//     const test = i % n === 0;
//     return test;
//   });
// }
// console.log(nthElementFinder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
