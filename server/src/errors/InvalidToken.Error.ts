import { BaseError } from "./Base.Error";

export class InvalidTokenError extends BaseError {
    constructor(message: string) {
        super(message, 401);
      }
    public serializeErrors(): Record<string, unknown> {
        return { message: this.message }
    }

}