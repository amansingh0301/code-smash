import { Request, Response } from "express";

export interface IInputValidator {
    validateInput(req: Request, res: Response, next: () => void): Promise<void> | void;
}