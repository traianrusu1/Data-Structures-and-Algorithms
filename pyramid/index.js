//a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, line = "") {
  //   let width = n * 2 - 1;

  //   for (let i = 0; i < n; i++) {
  //     var line = "";
  //     let numHashes = (i + 1) * 2 - 1;
  //     let numSpaces = width - numHashes;

  //     for (let k = 0; k < width; k++) {
  //       if (numHashes === width) {
  //         line += "#";
  //       } else {
  //         if (k < numSpaces / 2 || k >= width - numSpaces / 2) {
  //           line += " ";
  //         } else {
  //           line += "#";
  //         }
  //       }
  //     }
  //     console.log(line);
  //   }

  /////////////RECURSIVE SOLUTION///////////
  if (row === n) {
    return;
  }

  let width = n * 2 - 1;
  if (line.length === width) {
    console.log(line);
    pyramid(n, row + 1, "");
  } else {
    let numHashes = (row + 1) * 2 - 1;
    let numSpaces = width - numHashes;

    if (numHashes === width) {
      line += "#";
    } else {
      if (line.length < numSpaces / 2 || line.length >= width - numSpaces / 2) {
        line += " ";
      } else {
        line += "#";
      }
    }
    pyramid(n, row, line);
  }
}

module.exports = pyramid;
