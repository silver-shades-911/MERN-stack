// ==================== Async Error Wrapper ====================
//
// Purpose:
//   To simplify error handling in asynchronous route handlers.
//   Instead of using try/catch blocks in every async controller,
//   wrapAsync catches errors and passes them to the next error-handling middleware.
//
// Usage:
//   Wrap any async route handler with wrapAsync when passing it to a route.

function wrapAsync(fn) {
  return function (req, res, next) {
    if (typeof fn !== "function") {
      // Ensure that the provided argument is a function.
      throw new TypeError("wrapAsync expects a function, but got " + typeof fn);
    }
    // Call the async function and catch any errors, passing them to next().
    fn(req, res, next).catch((err) => next(err));
  };
}

module.exports = wrapAsync;
