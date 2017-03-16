// Return the remaining elements of an array after chopping off (n) elements from the head.
// The head means the beginning of the array, or the zeroth index.

function chop(array, num) {
  array.splice(0, num);
  return array;
}

console.log(chop(["bacon", "pancakes", "coffee"], 2));
