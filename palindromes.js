// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Return true if the given string is a palindrome. Otherwise, return false.


function palindrome(str) {
  // turn str to lower case and remove non-alphanumeric characters
  var remove = /[^A-Za-z0-9]/g;
  var original = str.toLowerCase().replace(remove, "");
  // split and reverse original string
  // join as new string
  var checkString = original.split("").reverse().join("");

  if (checkString === original) {
    return true;
  } else {
    return false;
  }
}
// console.log("car");
console.log(palindrome("race car"));
console.log(palindrome("_eye")); // true
console.log(palindrome("almostomla")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // false
