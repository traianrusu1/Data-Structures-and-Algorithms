// a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Pseudo Code
// Basically we want to loop through incrementing a counter and setting the correct spot in the arrays to the counter. Going in a spiral
// Instantiate array of arrays. Loop through to push an arrray into the outer arrays so that we have n inner arrays
// set variables for startrow, endrow, startcol, endcol and counter
// while startcol <= endCol AND startrow <= endRow do all the following
// loop from startcol to endcol and add the counter at arr[startrow][i]. Increment counter. This will do first row
// Since first row is done and we dont need it anymore then we increment startRow
// then we want to do the left side going down
// loop through from startRow to endrow. set arr[i][endCol] to counter. Increment counter
// Since we are now done with right end column we can decrement endcol
// then we want to do the bottom row going from right to left
// loop through from endcol to startcol. set arr[endrow][i] to counter. Increment counter
// done with bottom row so we can decrement endRow
// Then we want to do the left side going from down to up
// loop through from endrow to startrow. set arr[i][startcol] to counter. Increment counter
// Done with left start col so we can increment startcol.
// outermost while loop will continue until the start row and end row and start col and end col converge

function matrix(n) {
  let arr = [];
  for (let y = 0; y < n; y++) {
    arr.push([]);
  }
  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;
  let counter = 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = counter;
      counter++;
    }

    startRow++;

    for (let k = startRow; k <= endRow; k++) {
      arr[k][endCol] = counter;
      counter++;
    }

    endCol--;

    for (let j = endCol; j >= startCol; j--) {
      arr[endRow][j] = counter;
      counter++;
    }

    endRow--;

    for (let h = endRow; h >= startRow; h--) {
      arr[h][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return arr;
}

module.exports = matrix;
