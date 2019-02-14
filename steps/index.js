// a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (k = 0; k < n; k++) {
      if (k <= i) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

module.exports = steps;
