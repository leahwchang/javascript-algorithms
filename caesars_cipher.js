// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase.
// Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  var array = [];
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char < 65 || char > 90) {
      array.push(str[i]);
    } else if (char < 78) {
      array.push(String.fromCharCode(char + 13));
    } else {
      array.push(String.fromCharCode(char - 13));
    }
  }
  return array.join("");
}

console.log(rot13("V YVXR ONPBA")); // "I LIKE BACON"
