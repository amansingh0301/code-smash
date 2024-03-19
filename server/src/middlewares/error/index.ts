import { ErrorMiddleware } from "./Error";

export const errorMiddleware = new ErrorMiddleware().handleError;