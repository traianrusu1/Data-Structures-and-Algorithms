// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let most = 0;
  let mostChar = "";
  for (let char of str) {
    obj[char] = !obj[char] ? 1 : obj[char]++;
  }

  Object.keys(obj).forEach(function(key) {
    if (obj[key] > most) {
      most = obj[key];
      mostChar = key;
    }
  });
  return mostChar;
}

module.exports = maxChar;
