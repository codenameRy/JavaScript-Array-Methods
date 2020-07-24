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