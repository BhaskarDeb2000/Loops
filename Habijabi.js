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

function primeNumber(a) {
  var prime = a != 1;
  for (let i = 2; i != a; i++) {
    if (a % i == 0) {
      prime = false;
    }
    return (prime += "");
  }
  return a;
}
console.log(primeNumber(10));

function biggerPrime(a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return biggerPrime(a + 1);
    }
  }
  return a;
}

console.log(biggerPrime(38));
