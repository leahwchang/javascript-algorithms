// Check if a string (first argument, str) ends with the given target string (second argument, target)

function confirmEnding(str, target) {
  var check_string = str.substring(str.length - target.length);
  if (check_string.toLowerCase() === target.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("I want some donuts", "donuts"));
