import { BaseError } from "./Base.Error";

export class SubmitError extends BaseError {
    constructor(message: string) {
        super(message, 500);
      }
    public serializeErrors(): Record<string, unknown> {
        return { message: this.message }
    }

}