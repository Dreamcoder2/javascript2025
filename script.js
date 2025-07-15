// CONDITIONAL OPERATOR

const age = 23;
age >= 18
  ? console.log("i like to drink wine")
  : console.log("i like to derik water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// using in result as a expression
console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
