"use strict";

//SIMPLE FUNCTION

function logger() {
  console.log("my name is jones");
}

logger();

// FUNCTION AS A PROCESSOR
function fruitmixer(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} and ${oranges}`;
  return juice;
}

const appleJuice = fruitmixer(4, 5);
console.log(appleJuice);

// FUNCTION EXPRESSION

// FUNCTION DECLARATION EXAMPLE -- we can call before declaration

function calcAge(birthYear) {
  return 2025 - birthYear;
}

const age = calcAge(1996);
console.log(age);

// USING EXPRESSION
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(2003);
console.log(age2);

// ARROW FUNCTION
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// FUNCTION CALLS ANOTHER FUNCTION

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor = function (apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);
  const juice = `juice made with ${applePieces} apples ${orangePieces} oranges`;
  return juice;
};

const finaljuice = fruitProcessor(8, 9);
console.log(finaljuice);
