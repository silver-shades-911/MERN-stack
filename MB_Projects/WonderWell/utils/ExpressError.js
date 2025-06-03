// ==================== Custom Express Error Class ====================
//
// Purpose:
//   To create standardized error objects with an HTTP status code and message.
//   This makes it easier to manage and respond to errors throughout the application.
//
// Usage:
//   When an error condition occurs, throw an instance of ExpressError.
//   The error-handling middleware will then extract the statusCode and message for the response.

class ExpressError extends Error {
  constructor(statusCode, message) {
    super();                  // Call the parent Error constructor.
    this.statusCode = statusCode; // HTTP status code (e.g., 400, 404, 500).
    this.message = message;       // Custom error message.
  }
}

module.exports = ExpressError;
