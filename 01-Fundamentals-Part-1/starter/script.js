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

//------------------------------------------------------------------------------------------//
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
//------------------------------------------------------------------------------------------//

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1992; // gives an error due to mutating a const

//------------------------------------------------------------------------------------------//
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

//------------------------------------------------------------------------------------------//


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
/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

 Write your code below. Good luck! 🙂 */
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const MarkHigherBMI = BMIMark > BMIJohn;

console.log("Marks BMI =", BMIMark, "Johns BMI =", BMIJohn);
console.log("Does Mark Have a Higher BMI than John? ", MarkHigherBMI);
*/
//------------------------------------------------------------------------------------------//
