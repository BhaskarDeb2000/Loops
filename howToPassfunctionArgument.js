const objectNane = {
  // object
  name: "orgho",
  email: "jjjj",
};
console.log(objectNane.name);

const arraysName = [
  {
    // array
    name: "shame",
    email: "jjjj",
  },
];
console.log(arraysName[0].name);
const anotherName = "jd"; // string
console.log(anotherName);

function name(params) {
  return params;
}
console.log(name(anotherName));
console.log(name(objectNane.name));
console.log(name(arraysName[0].name));
