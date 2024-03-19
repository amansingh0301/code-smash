import { BaseError } from "./Base.Error";

export class ConfigAbsentError extends BaseError {
    constructor(message: string) {
        super(message);
      }
    public serializeErrors(): Record<string, unknown> {
        return { message: this.message }
    }

}