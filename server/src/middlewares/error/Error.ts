import { Request, Response } from "express";
import { BaseError } from "../../errors";

export class ErrorMiddleware {
    handleError(error: Error, req: Request, res: Response, next: () => void): void | Promise<void> {
        if(!error){
            next();
        }

        console.log(error.stack);
        if (error instanceof BaseError) {
            res.status(error.statusCode).json(error.serializeErrors());
          } else {
            // Handle unexpected errors
            res.status(500).json({ message: 'Internal Server Error' });
          }
    }
}