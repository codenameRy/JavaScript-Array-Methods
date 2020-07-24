//July 23, 2020 - Array Methods

// Challenge 1 - Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

//camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//Solution
function camelize(str) {
  return str
  .split('-')
  .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
  .join('')
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Challenge 2 - Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array.

//Solution
function filterRange(arr, a, b) {
  return arr.filter(range => (a <= range && range <= b));
}

let arr = [5, 3, 8, 2];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); 
alert( arr );

//Challenge 3 - Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

//Solution
function filterRangeInPlace(arr2, a, b) {

  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr2.splice(i, 1);
      i--;
    }
  }

}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

alert( arr2 ); // [3, 1]

//Challenge 4 - Sort in decreasing order

function descendNumber(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr3 = [5, 2, 1, -10, 8];

arr3.sort(descendNumber).reverse()

alert( arr3 ); // 8, 5, 2, 1, -10

//Challenge 5 - Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

//Solution 1
function copySorted(arr4) {
  return arr4.slice().sort()
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr4 ); // HTML, JavaScript, CSS (no changes)

//Challenge 6 - Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.

//Solution
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

//Challenge 7 - Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

//Solution
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)

alert( names ); // John, Pete, Mary

//Challenge 8 - Map to objects

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

//Solution

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
})
)

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

//Challenge 9 - Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let peace = { name: "Peace", age: 25 };
let zara = { name: "Zara", age: 30 };
let alexandra = { name: "Alexandra", age: 28 };

let arr5 = [ peace, zara, alexandra ];

function sortByAge(users) {
  return users.sort( (a, b) => a.age > b.age ? 1 : -1)
}

sortByAge(arr5);

// now: [ peace, alexandra, zara ];
alert(arr5[0].name); // Peace
alert(arr5[1].name); // Alexandra
alert(arr5[2].name); // Zara

//Challenge 10 - Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

//Solution
let array = [1, 2, 3];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  }
}

shuffle(array);
console.log(array);
// array = [3, 2, 1]

shuffle(array);
console.log(array);
// array = [2, 1, 3]

shuffle(array);
console.log(array);
// array = [3, 1, 2]
// ...

//Challenge 11 - Get average age

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

//Solution
let trex = { name: "T-Rex", age: 25 };
let jura = { name: "Jura", age: 30 };
let scotty = { name: "Scotty", age: 29 };

function getAverageAge(users) {
  return users.reduce( (a, b) => a + b.age, 0) / users.length
}



let array2 = [ trex, jura, scotty ];

alert( getAverageAge(array2) ); // (25 + 30 + 29) / 3 = 28

//Challenge 12 - Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.


//Solution with ES6 with Set method
function unique(arr) {
  return [...new Set(arr)]
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

//Challenge 13 - Create keyed object from array

// Let’s say we received an array of users in the form {id:..., name:..., age... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let usersX = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersX);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(array) {
  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj
  }, {});
};

console.log(usersById)