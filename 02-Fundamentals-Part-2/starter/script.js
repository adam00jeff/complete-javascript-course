"use strict";

// strict mode
// all code from now onwards should have strict mode active

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hadDriverLicence = true; // typo in variable to show strict mode, if strict mode is active, an error is shown as an undefined variable
if (hasDriversLicense) {
  console.log(`I can drive`); // without strict mode this shows no errors but also no results
}
*/
//----------------------------------------------------------------------------------------/
/*
//Functions

function logger() {
  //function body
  console.log("My name is Jonas");
}

// calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  // input data will be defined when called
  // console.log(apples, oranges); // function peramaters can be used as normal vars
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // the value the function will return, becoming the result
}

const appleJuice = fruitProcessor(5, 0); // saves the return of the function to a variable for logging to the console
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4); // reuses the function with new values set
console.log(appleOrangeJuice);

*/
//----------------------------------------------------------------------------------------/
/*
// Function Declarations vs. Expressions

const age1 = calcAge1(1991); // function expressions can be called before they are declared
// a function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear; // no need to assign to a var if it is not used anywhere else
}
console.log(age1);

//a function expression
// expressions produce values
const calcAge2 = function (birthYear) {
  // calcAge2 is a expression, which holds a function that returns a value
  // function with out a name 'anonaymous' function
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
//----------------------------------------------------------------------------------------/
/*

// Arrow Functions

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear; // parameter for function within the brackers, the return is implicit
const age3 = calcAge3(1991);
console.log(age3); // 46

const yearsUntilRetirement = (birthYear) => {
  // curly braces are used to insert a multi line
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement; // return can only be omitted on a single line arrow function
};

const yearsUntilRetirement = (birthYear, firstName) => {
  // curly braces are used to insert a multi line
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`; // return can only be omitted on a single line arrow function
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
//----------------------------------------------------------------------------------------/
/*
// Functions calling other Functions

function cutFruitPieces(fruit) {
  return fruit * 3; //4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
//----------------------------------------------------------------------------------------/
/** */

//Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "jonas"));
