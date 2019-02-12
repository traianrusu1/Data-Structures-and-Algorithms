// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createMap(str) {
  let obj = {};
  for (let char of str.toLowerCase()) {
    if (char <= "z" && char >= "a") {
      obj[char] = !obj[char] ? 1 : obj[char]++;
    }
  }

  return obj;
}

function anagrams(stringA, stringB) {
  let objA = createMap(stringA);
  let objB = createMap(stringB);
  let same = true;

  //dont need to check and assign which one is longer,
  // if they are not same length then they cannot be anagrams
  //   Object.keys(objA).length > Object.keys(objB).length
  //     ? ((longerObj = objA), (shorterObj = objB))
  //     : ((longerObj = objB), (shorterObj = objA));

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    same = false;
  } else {
    for (let val in objA) {
      if (objA[val] !== objB[val]) {
        same = false;
        break;
      }
    }
  }

  return same;
}

module.exports = anagrams;
