export abstract class BaseError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, new.target.prototype); // Ensures proper inheritance
  }

  public abstract serializeErrors(): Record<string, string | unknown>
}