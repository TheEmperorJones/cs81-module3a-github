// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// Square a number
function square(x) {
  return x * x;
}

// Hello to Harry, then goodbye
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// Power function, using base and exponent
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

// A very concise function value using an arrow function
let h = a => a % 3;
