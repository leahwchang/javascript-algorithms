// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  var array = str.split(" ");
  var longest_word = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest_word.length) {
      longest_word = array[i];
    }
  }
  return longest_word.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
