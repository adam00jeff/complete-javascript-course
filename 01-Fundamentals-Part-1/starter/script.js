/*
let js = "amazing";
console.log((40 + 30 + 8 - 6) / 2);

let firstName = "Jonas";
let PI = 3.1415;

console.log(firstName);
console.log(PI);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";

// console.log(myFirstJob);
*/
//-----------------------------------------------------------------------------------------//
/*
true;
// set variable to a BOOL
let jsIsFun = true;

console.log(true);
console.log(typeof true);

// console log confirms BOOL
console.log(typeof jsIsFun);

console.log(typeof 66);
console.log(typeof "A string of characters");

// variable is overwritten with STRING
jsIsFun = "YES";
// console log now confirms the value within the
console.log(typeof jsIsFun);

// define variable without a value
let year;
console.log(year);
console.log(typeof year);

// assing the variable a new value
year = 1991;
console.log(year);
console.log(typeof year);
*/
//------------------------------------------------------------------------------------------/
/*
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1992; // gives an error due to mutating a const
*/
//------------------------------------------------------------------------------------------//
/*
// Math Operators
const now = 2024;
const ageJonas = now - 1988;
const ageSarah = now - 1978;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x -1 = 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah > 18);

const isFullAge = ageSarah >= 18; // saves as a BOOL true

console.log(now - 1991 > now - 2018);
*/
//------------------------------------------------------------------------------------------//
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y; // x and y with no value
x = y = 25 - 10 - 5; // evaluated left to right // x = y = 10
console.log(x, y); // 10 10

const averageAge = ageJonas + ageSarah / 2; // data within parenthesis is evaluated first
console.log(ageJonas, ageSarah, averageAge);
*/
//------------------------------------------------------------------------------------------//

//Coding Challenge 1
/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

 Write your code below. Good luck! 🙂 */
/*
const massMark = 78; // const is used by default
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark); // multiplication in brackets to ensure it happens first
const BMIJohn = massJohn / (heightJohn * heightJohn);

const MarkHigherBMI = BMIMark > BMIJohn; // finds TRUE if the left value is higher than the first

console.log("Marks BMI =", BMIMark, "Johns BMI =", BMIJohn); // slightly more verbose logging to show the infromation around the results
console.log("Does Mark Have a Higher BMI than John? ", MarkHigherBMI);
*/
//------------------------------------------------------------------------------------------//
/*
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;
// concatenates below sting to output I'm Jonas, a 46 year old Teacher!
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
// outputs same as above (I'm Jonas, a 46 year old Teacher!) using a string template
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
// outputs a multi-line string comment
console.log(
  "string with \n\
multiple \n\
new lines"
);
// easier way to write multi-line strings
console.log(`String
on 
Multiple 
lines`);
*/
//------------------------------------------------------------------------------------------//
// Taking Decisions: if/ else statements
/*
const age = 17;
//commented out below, more common way following
const isOldEnough = (age) => 18;
if (isOldEnough) {
  // if the condition in the parenthesis is true, the code in the {} will be executed.
  console.log("Sarah can start her Driving Licence");
}

if (age >= 18) {
  console.log("Sarah can start her Driving Licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah cannot start her Driving Licence for ${yearsLeft} years`);
}
const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
//----------------------------------------------------------------------------------------/

//Coding Exercise 2: Challenge #2
/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

const massMark = 78; // const is used by default
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// multiplication in brackets to ensure it happens first
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
// finds TRUE if the left value is higher than the first
const MarkHigherBMI = BMIMark > BMIJohn;
if (MarkHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/
//----------------------------------------------------------------------------------------/
/*
// Type Conversion and Coercion
//Conversion
const inputYear = "1991";
console.log(inputYear + 18); // displays a concatenated string
console.log(Number(inputYear) + 18); // converts to a number to give 2009

//Coercion
console.log("I am " + 23 + " Years old"); // + operator triggers a coercion to string
console.log("23" - "10" - 3); // - operator coercion to a number
console.log("23" * "2"); // * operator coercion to a number

let n = "1" + 1; // makes string of 11
n = n - 1; // makes 11 - 1 as a number
console.log(n); // outputs 10 as a number
*/
//----------------------------------------------------------------------------------------/
/* 
//Truthy and Falsy Values
// Falsy Values
// 0, '', undefined, NULL, NaN
// all other values are Truthy

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true

const money = 0; // 0 will return false
if (money) {
  // will check value, and try to convert it to BOOL
  console.log(`Don't spend it all`); // Truthy Value returns here
} else {
  console.log(`Spent it all`); // Falsy Value returns here
}

let height; // undefined
if (height) {
  // undefined, aka a Falsy value
  console.log(`Height is defined`);
} else {
  console.log(`Height is undefined`); // returns False
}
*/
//----------------------------------------------------------------------------------------/
/*
//Equality Operators


const age = 18;
// Strict Equality
if (age === 18) console.log("You just became an adult"); // single line if does not need {}
// tripple =
if (age === "18") console.log(`This should not be output, it is not equal`);
// double =
if (age == "18") console.log(`This should be output, it is a loose equal`);

const favourite = Number(prompt(`What's your favourite number?`)); // wrapped to pass input to a number
console.log(favourite);
console.log(typeof favourite); // string

// looking for a number, but a string will also work
if (favourite == 23) {
  console.log(`Cool Number`);
}
// looking for a number, will only accept a number
if (favourite === 23) {
  console.log(`Cool Number`);
} else if (favourite == 7) {
  console.log(`7 is also fine`);
} else {
  console.log(`Number is not in system`);
}
*/
//----------------------------------------------------------------------------------------/
/*
//Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; // B
const hasNotGoodVision = false; // c

console.log(hasDriversLicense && hasGoodVision); // result of true && true should be true
console.log(hasDriversLicense && hasNotGoodVision); // should be false
console.log(hasDriversLicense || hasNotGoodVision); // OR, should be true
console.log(!hasDriversLicense || hasNotGoodVision); // ! not operator switches to false

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

const isTired = true; // c
console.log(hasDriversLicense && hasGoodVision && isTired); // true, none of these values are false

// this will not be true if isTired is true
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}
*/
//----------------------------------------------------------------------------------------/
/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/
/*
const scoreDolphins = (96 + 108 + 89) / 3; // 97.66666666666
const scoreKoalas = (88 + 91 + 110) / 3; // 96.33333333333

if (scoreDolphins > scoreKoalas) {
  // true
  console.log(`Dolphins win the trophy`); // this will be output
} else if (scoreDolphins < scoreKoalas) {
  console.log(`Koalas win the trophy`);
} else {
  console.log(`Both win the trophy`);
}
*/
//----------------------------------------------------------------------------------------/
/* 

// The Switch Statement
const day = "wednesday";

switch (
  day // day === 'monday'
) {
  case "monday": //following the case and this colon, all lines are executed
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // break ends execution in the case statment, without breaks it will continue executing
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday": // multiple cases can be stacked
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default: // functions same as 'else' block
    console.log("Not a valid weekday");
}
// replace the above with an IF statment:
if (day === "monday") {
  // strick comparison
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  // wed or thur
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  // sat or sun
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid weekday"); // error handling
}
*/
//----------------------------------------------------------------------------------------/

// Statements and Expressions
/* 
3 + 4; // expression
1991; // expression
true && false && !false; // expression

if (23 > 10) {
  // statement
  const str = "23"; // the '23' is an expression, enclosed in a statement
}

console.log(`I'm ${2037 - 1991} years old`); // expression in the template literal

//console.log(`I'm ${if (23>10){ // satement in the template literal
//  const str = `23 is big`;      // will cause error 'unexpected token 'if'
//}}`)
*/
//----------------------------------------------------------------------------------------/
/* 
// The Conditional (Ternary) Operator

const age = 23;
/*
age >= 18 ? console.log("I like wine") : console.log("I like water"); // true
age >= 30 // condition
  ? console.log("I like wine a lot") // if
  : console.log("I like water a lot"); // else (false)
*/
/*
age >= 18 ? console.log("I like wine") : console.log("I like water");

const drink = age >= 18 ? "wine" : " water"; // this returns a value, so it is an expression
console.log(drink); // drink is now defined conditionally on a single line, without IF/ELSE

let drink2; // must be defined outside of the block
if (age >= 18) {
  drink2 = "wine2"; // variable is reassinged inside of the block
} else {
  drink2 = "water2";
}
console.log(drink2);
//using in a template literal
//if statements cannot be used in a literal, but a ternary operator can

console.log(`I like to drink ${age >= 18 ? "wine3" : " water3"}`); // as an expression, not a statement
*/
//----------------------------------------------------------------------------------------/
/* 
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/
/*
//my solution
const billValue = 275; //275; 40;   430;
const lowTip = billValue * 0.15;
const highTip = billValue * 0.2;
billValue >= 50 && billValue <= 300
  ? console.log(
      `The bill was ${billValue}, the tip was ${lowTip}, and the total value ${
        billValue + lowTip
      }`
    )
  : console.log(
      `The bill was ${billValue}, the tip was ${highTip}, and the total value ${
        billValue + highTip
      }`
    );
// course solution
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
//----------------------------------------------------------------------------------------/
