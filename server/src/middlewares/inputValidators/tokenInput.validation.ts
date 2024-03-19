import { Request, Response } from "express";
import { IInputValidator } from "../../interfaces";
import { InvalidInputError } from "../../errors";

export class TokenInputValidator implements IInputValidator {
    validateInput(req: Request, res: Response, next: () => void): void | Promise<void> {
        if(!req.body.name){
            throw new InvalidInputError('Name field should be present');
        }
        next();
    }

}