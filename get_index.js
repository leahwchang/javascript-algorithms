// Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
// once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.push(num);
  var array = arr.sort(function(a, b) {
    return a - b;
  });

  return array.indexOf(num);
}


console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([2, 5, 10], 15)); // 3
