//return true if string is a palindrome, e.g same forewards as backwards.

//not using reverse method
function palindrome(str) {
  return str === str.split("").reduce((prev, current) => current + prev, "");
}

module.exports = palindrome;
