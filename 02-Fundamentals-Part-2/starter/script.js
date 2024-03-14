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
 */
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
