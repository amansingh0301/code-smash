import { BaseError } from "./Base.Error";

export class InvalidInputError extends BaseError {
    constructor(message: string) {
        super(message, 400);
      }
    public serializeErrors(): Record<string, unknown> {
        return { message: this.message }
    }

}