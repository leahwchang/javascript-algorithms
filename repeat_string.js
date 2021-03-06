// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatString(string, number) {
  // loop thr str by num of times
  var repeated = "";
  if ( number < 0 ) {
    return repeated;
  }
  var i = 0;
  while ( i < number ) {
    repeated +=  string;
    i++;
  }
  return repeated;
}

console.log(repeatString("bacon", -5));
console.log(repeatString("eggs", 5));
