// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.
function chunkyArray(array, size) {
  var chunks = [];
  var count = 0;
  while (count < array.length) {
    chunks.push(array.slice(count, count += size));
  }
  return chunks;
}

console.log(chunkyArray(["donuts", "pizza", "fried chicken", "bacon", "eggs", "cheese"], 2));
