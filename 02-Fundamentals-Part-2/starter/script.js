"use strict"; /*

// strict mode
// all code from now onwards should have strict mode active

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hadDriverLicence = true; // typo in variable to show strict mode, if strict mode is active, an error is shown as an undefined variable
if (hasDriversLicense) {
  console.log(`I can drive`); // without strict mode this shows no errors but also no results
}
*/ /*
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

*/ /*
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
*/ /*
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
*/ /*
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
*/ /*
//----------------------------------------------------------------------------------------/
/*

//Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement; // return immediatley exits the function
  } else {
    console.log(`${firstName} has already retired`);
    return -1; // -1 shows the target has retired already
  }
  //return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike")); // returns a minus
*/
//----------------------------------------------------------------------------------------/
/*
  Coding Exercise 5: CHALLENGE #1

  Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
 */
/*
// teams compete * 3 -> avg is calc
// team 'wins' if their avg is > other teams avg * 2

//arrow function to calculate the avg of the 3 scores
const scoreAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//console.log(scoreAvg(1, 1, 1));

// create and assign variables for the avgs
// test data 1
let scoreDolphins = scoreAvg(44, 23, 71);
let scoreKoalas = scoreAvg(65, 54, 49);

// test data 2 // commented out to use 'let' as below to reassign value
//const scoreDolphins2 = scoreAvg(85, 54, 41);
//const scoreKoalas2 = scoreAvg(23, 34, 27);

// create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); // call console.log inside the function
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No Team Wins...(${avgDolphins} vs. ${avgKoalas})`);
  }
};
//checkWinner(106, 505);
//checkWinner(500, 100);
//checkWinner(2, 3);
checkWinner(scoreDolphins, scoreKoalas); // the console.log is inside the function, calling the function prints to console

//test data 2
scoreDolphins = scoreAvg(85, 54, 41);
scoreKoalas = scoreAvg(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/
//----------------------------------------------------------------------------------------
/*
  Introduction to Arrays


// seperate variables
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// an array of variables
const friends = ["Michael", "Steven", "Peter"]; // This is the 'Literal' Array syntax
console.log(friends);

//Array can be declared by name also this is the Array function directly
const example = new Array(1111, 2222, 3333, 4444);

*/
/* How the array looks in the console log:
(3) ['Michael', 'Steven', 'Peter']
0
: 
"Michael"
1
: 
"Steven"
2
: 
"Peter"
length
: 
3
[[Prototype]]
: 
Array(0)
*/
console.log(friends[0]); // Arrays are zero based, so this is the first value in the Array
console.log(friends[1]);

console.log(friends.length); // number of elements in the array
console.log(friends[friends.length - 1]); // finds the last element in the Array

friends[2] = "Jay"; // friends is declared as a 'const', but only primitive values are immutable
console.log(friends);

//friends = ["Bob", "Alice"]; -- Causes an error, values in the array can be changed, but the whole array cannot be change at once as returns the below error
// script.js:240 Uncaught TypeError: Assignment to constant variable.

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991]; // arrays can have calculations and multiple value types

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
// calcAge(years); <- this will not work, as the function is not expecting an array, it is expecting a single value
// the query above will throw a NaN error, as the array is 'not a number'

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]); // last value in array
console.log(age1, age2, age3); //47 70 19

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]), // function calls can be used to construct arrays, as they return a value
];
console.log(ages);
// /(3) [47, 70, 19]
*/
//----------------------------------------------------------------------------------------
/*
//Basic Array Operations (Methods)

//Adding Elements
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
console.log(friends); //(4) ['Michael', 'Steven', 'Peter', 'Jay']

friends.unshift("John");
console.log(friends); //(5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']

//Removing Elements
friends.pop(); // removes the last element from the array
console.log(friends); //(4) ['John', 'Michael', 'Steven', 'Peter']
// pop returns the value removed from the array, these values can be logged as below
const popped = friends.pop();
console.log(popped); // Peter
console.log(friends); //(3) ['John', 'Michael', 'Steven']

friends.shift(); // will remove the first value in the array
console.log(friends); // (2) ['Michael', 'Steven']

// finding element info
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1 <- returns -1 if the value is not found in the array

// checking an array for an element
console.log(friends.includes("Steven")); // True, value is found in the array
console.log(friends.includes("Bob")); // False, the value is not found in the array

friends.push(23); // adds 23 as a number to the array
console.log(friends.includes("23")); // False, a string and a number are not found to be equal, due to strict equality
console.log(friends.includes(23)); // True

if (friends.includes("Peter")) {
  console.log("You have a Peter");
} else {
  console.log("You have no Peters");
}
if (friends.includes("Steven")) {
  console.log("You have a Steven");
} else {
  console.log("You have no Stevens");
}
*/
//----------------------------------------------------------------------------------------
/*

Coding Exercise: Challenge 2

CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/*
// 1: Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

const calcTip = function (billValue) {
  const lowTip = billValue * 0.15;
  const highTip = billValue * 0.2;

  if (billValue >= 50 && billValue <= 300) {
    return lowTip;
  } else {
    return highTip;
  }
};
//console.log(calcTip(100)); //  15
//console.log(calcTip(10)); // 2

// 2: And now let's use arrays! So, create an array called bills containing the test data below.
const bills = [125, 555, 44];
console.log(bills); // (3) [125, 555, 44]

// 3: Create an array called tips containing the tip value for each bill, calculated from the function you created before.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); // (3) [18.75, 111, 8.8]

// 4: BONUS: Create an array totals containing the total values, so the bill + tip.
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totals); // (3) [143.75, 666, 52.8]
*/
//----------------------------------------------------------------------------------------
/*
// INTRODUCTION TO OBJECTS

const jonas = {
  // curled braces used to define a new object
  firstName: "Jonas", // values are assigned in a key:value formatt
  lastName: "Schmedtman", // any data type can be used
  age: 2037 - 1991, // calculations can be made in the declarations
  job: "teacher",
  friends: ["michael", "peter, steven"], // arrays can be submitted as values
};

*/
//----------------------------------------------------------------------------------------

// DOT vs BRACKET NOTATION
