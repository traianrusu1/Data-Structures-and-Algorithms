// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //   let count = 0;
  //   str = str.toLowerCase();
  //   for (let char of str) {
  //     if (
  //       char === "a" ||
  //       char === "e" ||
  //       char === "i" ||
  //       char === "o" ||
  //       char === "u"
  //     ) {
  //       count++;
  //     }
  //   }
  //   return count;

  //another more elegeant way than using all those if statements
  //   let count = 0;
  //   let vowelChars = "aeiou"; // Side note: using an array instead might be more clear for future developers so we can discuss this with the interviewer
  //   for (let char of str.toLowerCase()) {
  //     if (vowelChars.includes(char)) {
  //       count++;
  //     }
  //   }
  //   return count;

  //YET ANOTHER WAY USING REGULAR EXPRESSIONS
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
