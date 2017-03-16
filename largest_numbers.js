// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array.

function largestOf(arr) {
  // given argument
  var array = arr;
  // start new array
  var new_array = [];
  // first loop: loop through the argument array
  for (var i = 0; i < array.length; i++) {
    // set largest = 0
    var largest = 0;
    // second loop: loop through sub_array
    // find largest number within each sub_array
    for (var j = 0; j < array[i].length; j++) {
      // if statement: if sub_array[j] is greater than largest
      if ( array[i][j] > largest) {
        // set largest equals to sub_array[i]
        largest = array[i][j];
      }
    }
    // push the largest number of each sub_array to new_array
    new_array.push(largest);
  }
  return new_array;
}

console.log(largestOf([[11, 29, 15], [2, 1, 3], [79, 68, 52], [5, 100, 90]]));
console.log(largestOf([[2, 1, 3], [11, 29, 15], [79, 68, 52], [5, 100, 90]]));
