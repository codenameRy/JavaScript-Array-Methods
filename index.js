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

//Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array.

/* let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)*/

//Solution
function filterRange(arr, a, b) {
  return arr.filter(range => (a <= range && range <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); 
alert( arr );