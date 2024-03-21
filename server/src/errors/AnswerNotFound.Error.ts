import { BaseError } from "./Base.Error";

export class AnswerNotFoundError extends BaseError {
    constructor(message: string) {
        super(message, 502);
      }
    public serializeErrors(): Record<string, unknown> {
        return { message: this.message }
    }

}