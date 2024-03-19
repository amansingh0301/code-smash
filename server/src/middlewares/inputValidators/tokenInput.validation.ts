import { ContextRunner, body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";
import { IInputValidator } from "../../interfaces";
import { InvalidInputError } from "../../errors";

export class TokenInputValidator implements IInputValidator {
    validateInput(validations: ContextRunner[]) {
        return async (req: Request, res: Response, next: NextFunction) => {
            for (let validation of validations) {
              await validation.run(req);
            }
        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new InvalidInputError('Input field error', errors.array()));
            }
        
            return next();
        };
    };
}