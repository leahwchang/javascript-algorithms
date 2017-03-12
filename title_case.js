// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  // split string by "" into an array
  var words = str.toLowerCase().split(" ");
  // loop through array
  for (var i = 0; i < words.length; i++) {
    // split each word by letter
    var letters = words[i].split("");
    // loop through each word
    for (var j = 0; j < letters.length; j++) {
      // capitalize first letter of each word
      letters[0] = letters[0].toUpperCase();
    }
    // join letters for each word
    words[i] = letters.join("");
  }
  // join words back to a string
  return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
