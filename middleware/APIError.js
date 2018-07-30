class APIError extends Error {
  constructor(message, status, isPublic) {
    super(message);
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor.name); 
  }
}

module.exports = APIError;
