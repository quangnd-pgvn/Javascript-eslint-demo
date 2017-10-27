//camelCase
var originalPrice = 19.90;
var discountPrice = 9;
var currentDate = '2017-07-09';

// Space around operators
var total = originalPrice - discountPrice;
var cars = ['BMW', 'Fiat', 'Toyota'];

// Object rules
var programmer = {
  firstName: "Jon",
  lastName: "Snow",
  age: 32,
  eyeColor: "black",
  skill: "🗡🏹👸"
};

// bad
var firstName = "",
  lastName = "",
  price = 0,
  discount = 0,
  fullPrice = 0,
  myArray = [],
  myObject = {};

// good
var firstName = "";
var lastName = "";
var price = 0;
var discount = 0;
var fullPrice = 0;
var myArray = [];
var myObject;

//Use === and !== Comparison 
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

counter = 1;
console.log('Counter: ' + counter);

console.log('====================='); // eslint-disable-line no-console
console.log('I am a hero');           // eslint-disable-line no-console
console.log('====================='); // eslint-disable-line no-console

debugger;
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {Number} num
 * @return {Object} this
 */
function Calculator(num) {
  // FIXME: shouldn't use a global here
  total = 0;

   // TODO: total should be configurable by an options param
   this.total = 0;

  return this;
}
