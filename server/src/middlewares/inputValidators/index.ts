export * from './inputs';
import { TokenInputValidator } from "./tokenInput.validation";
export const tokenInputValidator = new TokenInputValidator().validateInput;