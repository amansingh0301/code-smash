export * from './inputs';
import { FetchQuestionsInputValidator } from './ContestQuestionInput.validation';
import { TokentValidator } from './token.validation';
import { TokenInputValidator } from "./tokenInput.validation";
export const tokenInputValidator = new TokenInputValidator().validateInput;
export const tokenValidator = new TokentValidator().validateToken;
export const contestQuestionInputInputValidator = new FetchQuestionsInputValidator().validateInput;