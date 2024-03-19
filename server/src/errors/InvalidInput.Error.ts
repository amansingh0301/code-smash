import { ValidationError } from "express-validator";
import { BaseError } from "./Base.Error";

export class InvalidInputError extends BaseError {
    private errorMessages: Array<ValidationError>;
    constructor(message: string, errorMessages: Array<ValidationError>) {
        super(message, 400)
        this.errorMessages = errorMessages;
      }
    public serializeErrors(): Record<string, unknown> {
        return { 
            message: this.message,
            erros: this.errorMessages
        }
    }

}