// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

// function fib(n) {
//   const fibArr = [0, 1];
//   let first = null;
//   let second = null;

//   for (let i = 2; i <= n; i++) {
//       first = fibArr[i - 2];
//       second = firArr[i - 1];

//       fibArr.push(first + second);
//   }
//   return fibArr[n];
// }

module.exports = fib;
