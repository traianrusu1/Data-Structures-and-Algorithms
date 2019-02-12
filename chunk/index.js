// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  ///////////////////MY WAY///////////////////
  let newArr = [];

  for (let i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;

  ///////////////////Different way//////////////////////
  //   let newArr = [];
  //   let chunkNum = 0;

  //   for (let i = 0; i < array.length; i++) {
  //     if (!newArr[chunkNum]) {
  //       newArr.push([array[i]]);
  //     } else if (newArr[chunkNum].length === size) {
  //       newArr.push([array[i]]);
  //       chunkNum++;
  //     } else {
  //       newArr[chunkNum].push(array[i]);
  //     }
  //   }

  //   return newArr;
  // }

  ///////////////SLightly different than 2nd way//////////
  //   let newArr = [];

  //   for (let element of array) {
  //     let last = newArr[newArr.length - 1];
  //     if (!last || last.length === size) {
  //       newArr.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }

  //   return newArr;
}

module.exports = chunk;
