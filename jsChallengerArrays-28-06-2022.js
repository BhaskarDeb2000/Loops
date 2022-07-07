console.log("Task 1= Get nth element of array with 2 arguments");
function nthElementFinder(a, n) {
  return a[n - 1];
}
console.log(nthElementFinder([1, 2, 3, 4, 5], 3));

console.log("\nTask 2= Check if property exists in object with 2 arguments");
function objectPropertyFinder(a, b) {
  if (a[b]) {
    return true;
  } else {
    return false;
  }
}
console.log(objectPropertyFinder({ x: "a", y: "b", z: "c" }, "z"));

console.log("\nTask 3= Get nth character of string with 2 Arguments");
function nthCharacterFinder(a, n) {
  return a.charAt(n - 1);
}
console.log(nthCharacterFinder("zyxbwpl", 5));

console.log("\nTask 4= Get first 3 elements of an array with 1 argument");
function arrayFormatter(a) {
  return a.slice(0, 3);
}
console.log(arrayFormatter([1, 2, 3, 4]));

console.log(
  "\nTask 5= Count number of elements in JavaScript array with 1 argument"
);
function arrayLengthFinder(a) {
  return a.length;
}
console.log(arrayLengthFinder([1, 2, 2, 4]));

console.log("\nTask 6= Remove first 3 elements of an array with 1 argument");
function arrayFirstElementsRemover(a) {
  return a.slice(3);
}
console.log(arrayFirstElementsRemover([5, 4, 3, 2, 1, 0]));

console.log("\nTask 7= Get last n elements of an array with 1 argument");
function arrayLastElementsExtracter(a) {
  return a.slice(-3);
}
console.log(arrayLastElementsExtracter([5, 4, 3, 2, 1, 0]));

console.log("\n Task 8= Remove a specific array element with 2 arguments");
function specificElementRemover(a, b) {
  return a.filter((e) => {
    return e !== b;
  });
}
console.log(specificElementRemover([1, 2, 3], 2));

console.log("\nTask 9= Count number of negative values in array");
var ar = [[0, 9, 1]];

function negativeNumberCounter(ar) {
  var counter = [0];
  ar.forEach(function (a) {
    if (a < 0) counter[0]++;
  });
  return counter;
}

var result = negativeNumberCounter(ar);
console.log("" + result);
console.log(
  "\nTask 10= Sort an array of numbers in descending order with one argument"
);
function array(a) {
  return a.sort().reverse();
}
console.log(array([4, 2, 3, 1]));
console.log("\nTask 11= Sort an array of alphabets in with one argument");
function array(a) {
  return a.sort();
}
console.log(array(["b", "c", "d", "a"]));
console.log(
  "\nTask 12= Return the average of an array of numbers with 1 argument"
);
function arrayAverageCounter(a) {
  return eval(a.join("+")) / a.length;
}
console.log(arrayAverageCounter([10, 100, 40]));
console.log(
  "\nTask 13= Return the average of an array of numbers with 1 argument"
);
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
console.log("\nTask 14= Check if all array elements are equal with 1 argument");
function equalFinder(a) {
  return a.every((val, i, arr) => {
    return val === arr[0];
  });
}
console.log(equalFinder([true, true, true, true]));
