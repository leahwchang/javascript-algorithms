// Return true if the string in the first element of the array contains all of the letters
// of the string in the second element of the array.

function compare(arr) {
  // ignore case and split by characters
  var word = arr[0].toLowerCase().split("");
  var checkWith = arr[1].toLowerCase().split("");
  // loop through characters of second "checkWith" object
  for (var i = 0; i < checkWith.length; i++) {
    // if word indexOf checkWith returns -1, it does not include checkWith = false
    if (word.indexOf(checkWith[i]) == -1) {
      return false;
    }
  }
  return true;
}


console.log(compare(["bAcOn", "eGgs"]));  // false
console.log(compare(["coffEE", "eC"]));   // true
console.log(compare(["hello", "hey"]));   // false
