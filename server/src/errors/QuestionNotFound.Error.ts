import { BaseError } from "./Base.Error";

export class QuestionNotFoundError extends BaseError {
    constructor(message: string) {
        super(message, 404);
      }
    public serializeErrors(): Record<string, unknown> {
        return { message: this.message }
    }

}