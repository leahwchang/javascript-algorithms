// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // create an empty array
  var elements = [];
  // start at 1 because [0] is our initial array
  for (var i = 1; i < arguments.length; i++) {
    // fill the elements array using the arguments object
    elements.push(arguments[i]);
  }
  // double check
  // console.log(arr);
  // console.log(elements);
  // creates a new array with all elements that pass the test implemented by the provided function
  var filtered = arr.filter(function(searchElement) {
    // indexOf returns a Number, representing the position of the specified item, otherwise -1
    // function returns elements that are not in elements
    return elements.indexOf(searchElement) === -1;
  });
  // return the elements from the initial array that are NOT of the same value as the additional arguments
  return filtered;
}

console.log(destroyer(["Bacon", "Coffee", "Ice Cream", "Chocolate", "Cronut"], "Bacon", "Ice Cream"));
console.log(destroyer([1, 2, 3, 4, 5, 1, 2], 1, 2));
