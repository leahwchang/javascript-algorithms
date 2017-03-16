// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  var truncated = "";
  if (str.length > num && num > 3) {
    truncated = str.slice(0, (num - 3)).concat("...");
  } else if (str.length > num && num <= 3) {
    truncated = str.slice(0, num).concat("...");
  } else {
    truncated = str;
  }
  return truncated;
}

console.log(truncateString("Somewhere over the rainbow", 7));
console.log(truncateString("Way up high", 3));
console.log(truncateString("And the dreams that you dreamed of, Once in a lullaby",
"And the dreams that you dreamed of, Once in a lullaby".length));
