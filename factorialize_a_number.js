// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// recursive
function factorialize(n) {
  if (n < 0) { // termination case for negative numbers
    return "Negative number. Try again.";
  } else if (n === 0) { // base case for 0
    return 1;
  } else { // recursive case
    return (n * factorialize(n - 1));
  }
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(1));
console.log(factorialize(0));
console.log(factorialize(-1));

// for loop
function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num < 0) {
    return "Negative number. Try again.";
  }

  var factorial = 1;
  // for (var i = num; i >= 1; i--) { // 5! = 5 * 4 * 3 * 2 * 1 = descending
  for (var i = 1; i <= num; i++) { // 5! = 1 * 2 * 3 * 4 * 5 = ascending
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(-1));
