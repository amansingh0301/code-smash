export * from './inputs';
import { TokentValidator } from './token.validation';
import { TokenInputValidator } from "./tokenInput.validation";
export const tokenInputValidator = new TokenInputValidator().validateInput;
export const tokenValidator = new TokentValidator().validateToken;