// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let fibnum = 0;
//   prevFibnum = 1;
//   prevprevFibnum = 0;
//   for (i = 0; i <= n; i++) {
//     if (i < 2) {
//       fibnum = i;
//     } else {
//       fibnum = prevFibnum + prevprevFibnum;
//       prevprevFibnum = prevFibnum;
//       prevFibnum = fibnum;
//     }
//   }
//   return fibnum;
// }

//////////////RECURSIVE//////////
//super slow exponential runtime)() O(2^n)
// To improve this runtime and still use recursion we could memoize the function so that each time it is a duplicate call it will use the previous value instead of running it again
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

////////////////MEMOIZED VERSION OF RECURSIVE SOLUTION/////////////////

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
