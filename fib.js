/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N == 0 || N == 1) {
    return N;
  }

  return fib(N - 1) + fib(N - 2);
};
