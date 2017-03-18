// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([0, 2, "bacon", "eggs", false, "and", null, "cheese", NaN, "on a", undefined, "roll", ""]));
