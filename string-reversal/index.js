// reversing a string
// 3 different ways below

//using array reverse method
function reverseStringUsingReverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

//using array helper method reduce
function reverseStringUsingReduce(str) {
  return str.split("").reduce((prev, current) => current + prev, "");
}

//using a for loop
function reverseStringUsingForLoop(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = {
  reverseStringUsingReverse,
  reverseStringUsingReduce,
  reverseStringUsingForLoop
};
