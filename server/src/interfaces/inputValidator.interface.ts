import { Request, Response } from "express";
import { ContextRunner } from "express-validator";

export interface IInputValidator {
    validateInput(validations: ContextRunner[]): void;
}